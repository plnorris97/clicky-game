import React from "react";
import "./style.css";

function ClickyCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="Click Me!" src={props.image} />
      </div>
    </div>
  );
}

export default ClickyCard;
