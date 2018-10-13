import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.title = null;
		this.links = null;
		this.renderCardTitle = this.renderCardTitle.bind(this);
		this.renderCardLinks = this.renderCardLinks.bind(this);
	}

	renderCardLinks() {
		const links = this.props.links
		var linkList = [];
		if (links) {
			Object.values(links).map(function(link){
				var link = <a onClick={link.onAction}>{link.content}</a>
				linkList.push(link)
			})
			return linkList;
		}
	}

	renderCardTitle() {
		if (this.props.title) {
			return <div className="card-title"><h1>{this.props.title}</h1>{this.renderCardLinks()}</div>
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
