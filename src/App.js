import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import HomePage from "./pages/home";
function App() {
  return (
    <div className="App">
      <img
        src={logo}
        width="400"
        height="auto"
        style={{
          padding: "40px",
        }}
        alt="Pokemon App"
      />
      <HomePage />
    </div>
  );
}

export default App;
