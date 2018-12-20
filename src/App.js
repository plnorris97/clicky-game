import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ClickyCard from "./components/ClickyCard";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  // Map over this.state.cards and render a ClickyCard component for each card object
  render() {
    return (
      <div className="container">
       <Navbar />
        <Jumbotron />
        {this.state.cards.map(card => (
          <ClickyCard
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
