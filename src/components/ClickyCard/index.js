import React from "react";
import "./style.css";


function ClickyCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt="Click Me!" />
      </div>
    </div>
  );
}

export default ClickyCard;
