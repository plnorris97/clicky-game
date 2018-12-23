import React from "react";
// import Score from "./components/Score"
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <h3>Richmond Rocks!</h3>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <h4 className="instructions">Click an image to begin!</h4>
          </li>
          <li className="nav-item" id="scoreboard">
           <h4 className="score">Score: {props.currentScore} | Top Score: {props.topScore}</h4>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;