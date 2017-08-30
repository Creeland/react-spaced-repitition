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
	}

	revealAnswer() {
		this.setState({
			showAnswer: true
		})
	}

	render(){
		return(
			<div className="ba-ns">
				<p>{this.props.due[0].question}</p>
				<p>{this.state.showAnswer ? this.props.due[0].answer : null}</p>
				<button 
					onClick={this.revealAnswer} 
					className="mb3"
				>
					Reveal
				</button>
			</div>
		)
	}
}

export default Card