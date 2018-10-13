import React from 'react';

class Avatar extends React.Component {
	constructor(props) {
		super(props);
		this.primaryTextLabel = this.props.primaryTextLabel || 'Primary text'; // String
		this.primaryTextStyle = this.props.primaryTextStyle || 'regular'; //default, bold, link
		this.primaryTextAction = null; // function
		this.subTextLabel = null; // String
		this.initial = this.props.initial || "C";
		this.color = null;
		
		this.setPrimaryTextStyle = this.setPrimaryTextStyle.bind(this);
	}

	//

	setPrimaryTextStyle() {
		const classes = "";
		if (this.props.primaryTextStyle === "regular") {
			return;
		}
		if(this.props.primaryTextStyle === "bold") {
			return "type-strong"
		}
	}

	render() {
		return (
			<div className="avatar">
				<div className="avatar-picture">
					{this.initial}
				</div>
				<div className="avatar-info">
					<div className={this.setPrimaryTextStyle()}>{this.primaryTextLabel}</div>
					<div className="type-small type-subdued">{this.subTextLabel}</div>
				</div>
			</div>
		);
  }
}


export default Avatar;
