import React, { Component } from 'react';
import Deck from './features/Deck/Deck.js' 
import logo from './logo.svg';
import './App.css';
import 'tachyons'

class App extends Component {
  constructor(){
    super();
    this.handler = this.handler.bind(this)
    this.state = {
      decks: [
        {
          name: "Deck One",
          due: [
            {
              question: "Hello",
              answer: "World",
              due: "placeholder"
            },
            {
              question: "Goodbye",
              answer: "My dude",
              due: "placeholder"
            }
          ],
          backlog: [
            {
              question: "What is my name?",
              answer: "Cree",
              due: "placeholder"
            }
          ]
        }
      ]
    }
  }

  handler(index) {
    let decks = [...this.state.decks]
    decks[0].due = decks[0].due.slice(1)
    this.setState({decks})
  }

  render() {
    let object = {thing: {innerThing: true}}
    let array = [["hello", "world"], ["what", "the", "hell"]]
    return (
      <div className="App w-100 flex flex-row">
        {
          this.state.decks.map((deck, index) => {
            return (
              <Deck
                handler={this.handler}
                deck={deck}
              />
            )
          })
        }
      </div>
    );
  }
}
  

export default App;