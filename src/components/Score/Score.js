import React from "react";

function Score(props) {
    let Score = 0;
    let TopScore = 0;
     
  return <div className="scoreboard">
    {props.Score}
    {props.TopScore}
    </div>;
}

export default Score;