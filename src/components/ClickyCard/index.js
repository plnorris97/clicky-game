import React from "react";
import "./style.css";

// Setting the component's initial state

// randomize/shuffle cards after click

const ClickyCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);


export default ClickyCard;
