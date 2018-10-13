import React from 'react';

class Avatar extends React.Component {
	constructor(props) {
		super(props);
		this.title = null;
	}

	render() {
		return (
			<div className="avatar">
				<div className="avatar-picture">
					C
				</div>
				<div className="avatar-info">
					<strong>Cale Shapera</strong><br/>
					<span className="type-small type-subdued">Owner</span>
				</div>
			</div>
		);
  }
}


export default Avatar;
