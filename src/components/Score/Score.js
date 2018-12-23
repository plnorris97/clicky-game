import React from "react";

function Score(props) {
    let curentScore = 0;
    let topScore = 0;
     
  return <div className="scoreboard">
    {props.currentScore}
    {props.topScore}
    </div>;
}

export default Score;