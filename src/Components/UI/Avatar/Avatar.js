import React from 'react';

class Avatar extends React.Component {
	constructor(props) {
		super(props);
		this.textLabel = this.props.textLabel || 'Primary text'; // String
		this.textStyle = this.props.textStyle || 'regular'; //default, bold, link
		this.textAction = null; // function
		this.subTextLabel = this.props.subTextLabel || null; // String
		this.initials = this.props.initials || "D"; // string
		this.backgroundColor = this.props.backgroundColor || "#2C3D4E"; // string, hex color
		this.spacing = this.props.spacing || "m"; //string, size from the spacing system

		this.setTextStyle = this.setTextStyle.bind(this);
		this.setSpacing = this.setSpacing.bind(this);
	}

	setTextStyle() {
		const classes = "";
		if (this.props.textStyle === "regular") {
			return;
		}
		if (this.props.textStyle === "bold") {
			return "type-strong"
		}
	}

	setSpacing() {
		return "avatar spacing-stack-" + this.spacing;
	}

	render() {
		const style = {
			backgroundColor: {
			    backgroundColor: this.backgroundColor
			}
		};
		return (
			<div className={this.setSpacing()}>
				<div className="avatar-initial" style={style.backgroundColor}>
					{this.initials}
				</div>
				<div className="avatar-info">
					<div className={this.setTextStyle()}>{this.textLabel}</div>
					<div className="type-small type-subdued">{this.subTextLabel}</div>
				</div>
			</div>
		);
  }
}


export default Avatar;
