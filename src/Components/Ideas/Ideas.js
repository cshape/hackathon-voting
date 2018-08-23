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
    

  		let containerli = document.createElement('li');
  		let list = document.getElementById("ideaslist");
  		list.appendChild(containerli);
  		list.insertBefore(containerli, list.childNodes[0]);

  		var template = [];

		template.push(
    	'<div class="ideacard">',
	        '<p> Title: ' + this.state.title + '</p>',
	        '<p> Leader: '  + this.state.leader + '</p>',
	        '<p> Description: '  + this.state.description + '</p',
    	'</div>'
		);

		var htmlString = template.join('');
		containerli.innerHTML = htmlString;





    // 	let containerli = document.createElement("li");
  		// let dopeidea = document.createElement("div");
  		// let pElem = document.createElement("p");
  		// dopeidea.classList.add("ideacard");
  		// containerli.appendChild(dopeidea);
  		// // let ideatitle = document.createTextNode(this.state.title);
  		// // let idealeader = document.createTextNode(this.state.leader);
  		// // let ideadescription = document.createTextNode(this.state.description);
  		// pElem.innerHTML = this.state.title;
  		// dopeidea.appendChild(pElem);
  		// pElem.innerHTML = this.state.leader;
  		// dopeidea.appendChild(pElem);
  		// pElem.innerHTML = this.state.description;
  		// dopeidea.appendChild(pElem);




  		// // dopeidea.appendChild(idealeader);
  		// // dopeidea.appendChild(ideadescription);
  		// let list = document.getElementById("ideaslist");
  		// list.appendChild(containerli);
  		// list.insertBefore(containerli, list.childNodes[0]);
  		
  		this.setState({title: ''});
  		this.setState({leader: ''});
  		this.setState({description: ''});

  		event.preventDefault();
  	}

	
 	render() {
		return (
			<div>
				<div className="ideascard">
					<header className="cardheader">Ideas</header>
					<ul id="ideaslist">
						<li><div className="ideacard">
								<p>Title: Example Title</p>
								<p>Leader: Cale Shapera</p>
								<p>Description: A couple of sentences about what the idea is about.</p>
							</div>
						</li>
						<li><div className="ideacard">
								<p>Title: Example Title</p>
								<p>Leader: Cale Shapera</p>
								<p>Description: A couple of sentences about what the idea is about.</p>
							</div>
						</li>
						<li><div className="ideacard">
								<p>Title: Example Title</p>
								<p>Leader: Cale Shapera</p>
								<p>Description: A couple of sentences about what the idea is about.</p>
							</div>
						</li>
					</ul>
				</div>

				<div className="navigation">
					<button
					onClick={() => this.props.onRouteChange('signin')}
					>Sign Out</button>
				</div>
				<div className="formcontainer">
					<form className="formnewidea" onSubmit={this.handleSubmit}>
						<header className="cardheader">Gimme a cool idea!</header>
						<label>
							Title:
							<input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
						</label>
						<label>
							Leader:
							<input type="text" value={this.state.leader} onChange={this.handleChangeLeader} />
						</label>
						<label>
							Description:
							<textarea value={this.state.description} onChange={this.handleChangeDescription} />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default Ideas;