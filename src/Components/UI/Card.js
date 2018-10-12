import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.title = null
		this.renderCardTitle = this.renderCardTitle.bind(this);
	}

	renderCardTitle() {
		if (this.props.title) {
			return <div class="card-title"><h1>{this.props.title}</h1></div>
		}
	}
	render() {
		return (
			<div className="card">
				{this.renderCardTitle()}
				{this.props.children}
			</div>
		);
  }
}


export default Card;
