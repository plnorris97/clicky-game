import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ClickyCard from "./components/ClickyCard/index";
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
        <ClickyCard />
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
