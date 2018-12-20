import React from "react";
import Score from "./"

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <h3>Clicky Game</h3>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <h4>Click an image to begin!</h4>
          </li>
          <li className="nav-item">
           <h4>Score: {props.score} | Top Score: {props.TopScore}</h4>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;