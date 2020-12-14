import Top from "./Top/index";
import Contact from "./Sidebar/index";
import "./App.css";
import Chat from "./Chat/chat";
import Info from "./Info";
import { useContext, useEffect, useState, Provider } from "react";
import UserContext from "../store/context/auth";
import axios from "../utils/axios";
import SignIn from "./Auth/SignIn";

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [auth, setAuth] = useState({ name: "user" });

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const getUserId = (id) => {
    setUserId(id);
    console.log(id);
    console.log("clicked");
  };
  const user = false;
  if (user) {
    return (
      <UserContext.Provider value={{ user: { name: "ali" } }}>
        <div className="app">
          <Top />
          <div className="app__main">
            <Contact setId={getUserId} data={users} />
            <Chat _id={userId} />
            <Info />
          </div>
        </div>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ user: { name: "ali" } }}>
        <div className="app">
          <Top />
          <SignIn />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
