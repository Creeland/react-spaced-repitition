import React from 'react'
import Card from '../Card/Card.js'
import "tachyons"

class Deck extends React.Component {
	constructor(){
		super();
		this.state = {
			clicked: true,
			display: false
		}
	}

	handleDisplay = () => {
		this.setState({display: !this.state.display})
	}

	addCard = () => {
		
		this.refs.question.value = ""
		this.refs.answer.value = ""
	}

	showCard = () => {
		let content = null
		if(this.state.display === true){
			content = <div>
			  <h1>{this.props.deck.name}</h1>
			  <h3>You have {this.props.deck.due.length} card(s) due!</h3>
		      <h4>You have {this.props.deck.backlog.length} card(s) in the backlog</h4>
		      <Card
			  	due={this.props.deck.due}
			  	backlog={this.props.deck.backlog}
			  	handler={this.props.handler}
			  />

			  <div className="ba mt3">
			  	<div className="mt3">
			  		<input ref="question" className="mb0" type="text" name="Question"/>	
			  		<p className="mt0">Question</p>
			  	</div>
			  	<div>
			  		<input ref="answer" className="mb0" type="text" name="Question"/>	
			  		<p className="mt0">Answer</p>
			  	</div>
			  	<button onClick={() => this.addCard()} className="mb3">Add Card</button>
			  </div>
			</div>
		} else {
			content = null
		}
		return content
	}

	render(){
		return(
			<div className="ba-ns pa3-ns">
				<button onClick={this.handleDisplay}>Show {this.props.deck.name}</button>
				{this.showCard()}		
			</div>
		)
	}
}

export default Deck