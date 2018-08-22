import React from 'react';

class Ideas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			leader: '',
			description: ''
		};
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeLeader = this.handleChangeLeader.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}	

	handleChangeTitle(event) {
    	this.setState({title: event.target.value});
 	}

 	handleChangeLeader(event) {
    	this.setState({leader: event.target.value});
 	}

 	handleChangeDescription(event) {
    	this.setState({description: event.target.value});
 	}

  	handleSubmit(event) {
    	let coolidea = document.createElement("LI");
    	var ideacontent = document.createTextNode(this.state.title);
    	coolidea.appendChild(ideacontent);
    	document.getElementById("ideaslist").appendChild(coolidea);
    	event.preventDefault();
    	console.log(this.state);
  	}

	
 	render() {
		return (
			<div>
				<div className="ideascard">
					<header>Ideas</header>
					<ul id="ideaslist">
						<li>pancake-making robot</li>
						<li>tennis court on roof</li>
						<li>automate david's job</li>
					</ul>
				</div>

				<div className="navigation">
					<button
					onClick={() => this.props.onRouteChange('signin')}
					>Sign Out</button>
				</div>
				<div className="formcontainer">
					<form className="formnewidea" onSubmit={this.handleSubmit}>
						<label>
							Title:
							<input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
						</label>
						<label>
							Leader:
							<input type="text" value={this.state.value} onChange={this.handleChangeLeader} />
						</label>
						<label>
							Description:
							<textarea value={this.state.value} onChange={this.handleChangeDescription} />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default Ideas;