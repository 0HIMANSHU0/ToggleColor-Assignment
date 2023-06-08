import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
function App() {
  const [background, setBackground] = useState("light");
  const [buttonName, setButtonName] = useState();

  const toggleMode = () => {
    if (background === "light") {
      setBackground("dark");
      setButtonName("Enable Dark Mode");
      document.body.style.backgroundColor = "grey";
      document.body.color = "white";
    } else {
      setBackground("light");
      setButtonName("Disable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="ToggleColor-App"
        background={background}
        toggleMode={toggleMode}
        buttonName={buttonName}
      />
      <Home background={background} toggleMode={toggleMode} />
    </>
  );
}

export default App;
