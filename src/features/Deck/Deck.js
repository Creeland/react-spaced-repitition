import React from 'react'
import Card from '../Card/Card.js'
import "tachyons"

class Deck extends React.Component {
	constructor(){
		super();
		this.state = {
			clicked: true
		}
	}
	render(){
		return(
			<div className="ba-ns pa3-ns">
				<h1>{this.props.deck.name}</h1>
				<h3>You have {this.props.deck.due.length} card(s) due!</h3>
				<h4>You have {this.props.deck.backlog.length} card(s) in the backlog</h4>
				<Card
					due={this.props.deck.due}
					backlog={this.props.deck.backlog}
					handler={this.props.handler}
				/>			
			</div>
		)
	}
}

export default Deck