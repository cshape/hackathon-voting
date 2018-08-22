import React from 'react';

class NewIdea extends React.Component {
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
    	event.preventDefault();
    	console.log(this.state);
  	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
		);
	}
}

export default NewIdea;