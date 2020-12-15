import { useContext, useEffect, useState, Provider } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Top from "./Top/index";
import Contact from "./Sidebar/index";
import Chat from "./Chat/chat";
import Info from "./Info";
import UserContext from "../store/context/auth";
import axios from "../utils/axios";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/signUp";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [auth, setAuth] = useState();
  const [infoIsShown, setInfoIsShown] = useState(true);
  const initContext = useContext(UserContext);
  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const getUserId = (id) => {
    let res = users.find((u) => u._id === id);
    setUserId(res);
  };

  const updateContext = (data) => {
    setAuth(data);
  };

  if (initContext) {
    const main = (
      <div className="app__main">
        <Contact setId={getUserId} data={users} />
        <Chat isInfo={setInfoIsShown} data={{ userId, infoIsShown }} />
        {infoIsShown && (
          <Info userId={userId} data={infoIsShown} isInfo={setInfoIsShown} />
        )}
      </div>
    );
    return (
      <UserContext.Provider value={{ user: auth, updateContext }}>
        <BrowserRouter>
          <div className="app">
            <Top />
            <Switch>
              <Route key="main" path="/" exact render={() => main} />
              <Redirect to="/" key="defaultPath" />,
            </Switch>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ auth, updateContext }}>
        <div className="app">
          <BrowserRouter>
            <Top />
            <Switch>
              <Route key="signIn" path="/sign-in" exact component={SignIn} />,
              <Route key="signUp" path="/sign-up" exact component={SignUp} />,
              <Redirect to="/sign-in" key="defaultPath" />,
            </Switch>
          </BrowserRouter>
        </div>
      </UserContext.Provider>
    );
  }
}
export default App;
