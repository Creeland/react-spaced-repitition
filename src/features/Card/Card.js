import React from 'react'
import 'tachyons'

class Card extends React.Component {
	constructor(){
		super();
		this.state = {
			showAnswer: false,
			revealButton: false
		}
		this.revealAnswer = this.revealAnswer.bind(this)
		this.nextCard = this.nextCard.bind(this)
	}

	revealAnswer() {
		this.setState({
			showAnswer: true,
			revealButton: true
		})
	}

	nextCard() {
		this.props.handler()
		this.setState({
			showAnswer: false,
			revealButton: false
		})
	}

	render(){
		let handleButton
		if(this.state.revealButton) {
			handleButton = <button onClick={this.nextCard} className="mb3"> Next Card </button>
		} else {
			handleButton = <button onClick={this.revealAnswer} className="mb3"> Reveal </button>
		}

		return(
			<div className="ba-ns">
				<p>{this.props.due.length !== 0 ? this.props.due[0].question : "You're done!"}</p>
				<p>{this.state.showAnswer ? this.props.due[0].answer : null}</p>
				{this.props.due.length !== 0 ? handleButton : null}
			</div>
		)
	}
}

export default Card