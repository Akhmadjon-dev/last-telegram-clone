import Top from "./Top/index";
import Contact from "./Sidebar/index";
import "./App.css";
import Chat from "./Chat/chat";
import Info from "./Info";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  console.log(users);
  const getUserId = (id) => {
    setUserId(id);
    console.log(id);
    console.log("clicked");
  };
  return (
    <div className="app">
      <Top />
      <div className="app__main">
        <Contact setId={getUserId} data={users} />
        <Chat _id={userId} />
        <Info />
      </div>
    </div>
  );
}

export default App;
