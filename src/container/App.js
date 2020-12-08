import Top from "./Top/index";
import Contact from "./Sidebar/index";
import "./App.css";
import Chat from "./Chat/chat";
import Info from "./Info";

function App() {
  return (
    <div className="app">
      <Top />
      <div className="app__main">
        <Contact />
        <Chat />
        <Info />
      </div>
    </div>
  );
}

export default App;
