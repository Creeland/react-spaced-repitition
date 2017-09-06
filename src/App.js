import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Deck from './features/Deck/Deck.js' 
import logo from './logo.svg';
import './App.css';
import 'tachyons'

class App extends Component {
  constructor(){
    super();
    this.handler = this.handler.bind(this)
    this.addCardToDue = this.addCardToDue.bind(this)
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
              question: "Placeholder",
              answer: "McGee",
              due: "Placeholder"
            }
          ]
        }
      ]
    }
  }

  handler(index) {
    let { decks } = this.state

    decks[0].backlog.push(...decks[0].due.slice(0, 1))
    decks[0].due = decks[0].due.slice(1)

    this.setState({decks})
  }

  addCardToDue() {
    let { decks } = this.state
  }

  render() {
    let object = {thing: {innerThing: true}}
    let array = [["hello", "world"], ["what", "the", "hell"]]
    return (
      <div className="App w-100 flex flex-row">
        {
          this.state.decks.map((deck, index) => {
            return (
              <Deck deck={deck} handler={this.handler} />
            )
          })
        }
      </div>
    );
  }
}
  

export default App;