import React from 'react';

class Avatar extends React.Component {
	constructor(props) {
		super(props);
		this.primaryTextLabel = this.props.primaryTextLabel || 'Primary text'; // String
		this.primaryTextStyle = this.props.primaryTextStyle || 'regular'; //default, bold, link
		this.primaryTextAction = null; // function
		this.subTextLabel = this.props.subTextLabel || null; // String
		this.initials = this.props.initials || "D"; // string
		this.initialsBackgroundColor = this.props.initialsBackgroundColor || "#2C3D4E"; // string, hex color
		this.spacing = this.props.spacing || "m"; //string, size from the spacing system

		this.setPrimaryTextStyle = this.setPrimaryTextStyle.bind(this);
		this.setSpacing = this.setSpacing.bind(this);
	}

	setPrimaryTextStyle() {
		const classes = "";
		if (this.props.primaryTextStyle === "regular") {
			return;
		}
		if (this.props.primaryTextStyle === "bold") {
			return "type-strong"
		}
	}

	setSpacing() {
		return "avatar spacing-stack-" + this.spacing;
	}

	render() {
		const style = {
			initialsBackgroundColor: {
			    backgroundColor: this.initialsBackgroundColor
			}
		};
		return (
			<div className={this.setSpacing()}>
				<div className="avatar-initial" style={style.initialsBackgroundColor}>
					{this.initials}
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
