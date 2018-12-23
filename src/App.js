import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ClickyCard from "./components/ClickyCard/index";
import cards from "./cards.json";

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };


  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const currentScore = this.state.currentScore + 1;
    this.setState({
      currentScore: currentScore,
      correctIncorrect: ""
    });
    if (currentScore >= this.state.topScore) {
      this.setState({ topScore: currentScore });
    }
    else if (currentScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "Sorry that's not right",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(cards);
    this.setState({ cards: shuffledCards });
  };

  // Map over this.state.cards and render a ClickyCard component for each card object
  render() {
    return (
      <div className="container">
       <Navbar
       score={this.state.currentScore}
       topScore={this.state.topScore}
       correctIncorrect={this.state.correctIncorrect}
       />
        <Jumbotron />
        <ClickyCard />
        {this.state.cards.map(card => (
          <ClickyCard
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </div> 
    );
  }
}

export default App;
