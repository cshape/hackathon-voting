import React from 'react';

class Avatar extends React.Component {
	constructor(props) {
		super(props);
		this.primaryTextLabel = this.props.primaryTextLabel || 'Primary text'; // String
		this.primaryTextStyle = this.props.primaryTextStyle || 'regular'; //default, bold, link
		this.primaryTextAction = null; // function
		this.subTextLabel = this.props.subTextLabel || null; // String
		this.initial = this.props.initial || "C"; // string
		this.color = null; // string, hex color
		this.spacing = this.props.spacing || "m"; //string, size from the spacing system

		this.setPrimaryTextStyle = this.setPrimaryTextStyle.bind(this);
		this.setSpacing = this.setSpacing.bind(this);
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

	setSpacing() {
		return "avatar spacing-stack-" + this.spacing;
	}

	render() {
		return (
			<div className={this.setSpacing()}>
				<div className="avatar-initial">
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
