import { useState } from "react";
import { Sidebar } from "./components/SideBar";
import buildings from "../src/assets/buildings.jpg";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        = menu
      </button>
      <Sidebar isOpen={isOpen} />

      <main className="main" style={{ backgroundImage: `url(${buildings})` }}>
        <div className="building-text">
          <h1>K E I T H&nbsp; &nbsp;W A S S </h1>
          <h2>C O M P O S E R </h2>
        </div>
      </main>
    </div>
  );
}

export default App;
