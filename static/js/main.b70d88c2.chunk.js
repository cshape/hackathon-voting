(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a.p+"static/media/hackidea.0f5fff7a.jpg"},232:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(50),o=a.n(s),r=a(3),l=a(4),c=a(6),m=a(5),d=a(7),u=a(2),h=a(82),p=a(24),b=a(9),g=a.n(b),f=a(235),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={members:""},a.id=a.props.id,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(e){var t=this.props.members.map(function(e,t){return i.a.createElement("div",{className:"avatarwrapwrap",key:t,id:e._id},i.a.createElement("p",{className:"avatarwrapper"},e.name))});this.props.leader;this.setState({members:t})}},{key:"componentDidUpdate",value:function(e){if(e.members!==this.props.members){var t=this.props.members.map(function(e,t){return i.a.createElement("div",{className:"avatarwrapper",key:t,id:e._id},e.name)});this.setState({members:t})}}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.members)}}]),t}(i.a.Component);var k=function(e){return i.a.createElement("div",{className:"clapper"},i.a.createElement("span",{className:"type-subdued type-small"},"\ud83d\udc4f ",null==e.likes?0:e.likes))},E=(a(113),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={submissions:"",liked:!1,likes:[]},a.deleteIdea=a.deleteIdea.bind(Object(u.a)(Object(u.a)(a))),a.likeIdea=a.likeIdea.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"deleteIdea",value:function(e,t){var a=this,n=t.target.id,i="https://mighty-springs-20769.herokuapp.com/api/idea/".concat(e);g.a.delete(i).then(function(e){console.log(e,"idea deleted.")}).catch(function(e){console.log(e,"idea not deleted.")}),this.setState(function(){return{submissions:a.state.submissions.filter(function(e){return e.key!==n})}})}},{key:"likeIdea",value:function(e,t){var a=this,n="https://mighty-springs-20769.herokuapp.com/api/idea/".concat(e),i=t.target.id;console.log(i),g.a.post(n).then(function(e){var t;console.log(e,"idea liked");var n="idea".concat(i,"likes");a.state[n];a.setState((t={},Object(p.a)(t,n,+a.state[n]+1),Object(p.a)(t,"liked",!0),t)),console.log(a.state[n]),console.log(a.state)}).catch(function(e){console.log(e,"idea not liked")})}},{key:"componentDidMount",value:function(e){var t=this,a={maxWidth:"50vw"};fetch("https://mighty-springs-20769.herokuapp.com/api/ideas").then(function(e){return e.json()}).then(function(e){var n=e.map(function(e,n){var s="/ideasShow/"+e._id,o="/ideasEdit/"+e._id,r=e._id,l="idea".concat(n,"likes");return console.log(l),t.setState(Object(p.a)({},l,e.likes)),console.log(t.state[l]),i.a.createElement("tr",{className:"ideaSubmission",key:n,id:e._id},i.a.createElement("td",{style:a},i.a.createElement(f.a,{to:s},i.a.createElement("p",null,i.a.createElement("strong",null,e.name))),i.a.createElement("br",null),i.a.createElement("span",{className:"type-subdued type-small"},"Leader: ",e.leader),i.a.createElement(k,{likes:t.state[l]})),i.a.createElement("td",null,i.a.createElement("div",{className:"frontpagemembers"},i.a.createElement(v,{id:e._id,members:e.members}))),i.a.createElement("td",null,i.a.createElement("button",{onClick:t.likeIdea.bind(t,r),id:n,className:"button button__clap"},"Clap"),e.leader===localStorage.getItem("fullName")&&i.a.createElement(f.a,{to:o},i.a.createElement("button",{className:"button button__small"},"Edit")),e.leader===localStorage.getItem("fullName")&&i.a.createElement("button",{onClick:t.deleteIdea.bind(t,r),id:n,className:"button button__small"},"Delete")))});t.setState({submissions:n.reverse()}),console.log(t.state.submissions)})}},{key:"componentDidUpdate",value:function(){var e=this;1==this.state.liked&&fetch("https://mighty-springs-20769.herokuapp.com/api/ideas").then(function(e){return e.json()}).then(function(t){var a=t.map(function(t,a){var n="/ideasShow/"+t._id,s="/ideasEdit/"+t._id,o=t._id,r="idea".concat(a,"likes");return console.log(r),e.setState(Object(p.a)({},r,t.likes)),console.log(e.state[r]),i.a.createElement("tr",{className:"ideaSubmission",key:a,id:t._id},i.a.createElement("td",null,i.a.createElement(f.a,{to:n},i.a.createElement("p",null,i.a.createElement("strong",null,t.name))),i.a.createElement("br",null),i.a.createElement("span",{className:"type-subdued type-small"},"Leader: ",t.leader),i.a.createElement(k,{likes:e.state[r]})),i.a.createElement("td",null,i.a.createElement("div",{className:"frontpagemembers"},i.a.createElement(v,{id:t._id,members:t.members}))),i.a.createElement("td",null,i.a.createElement("button",{onClick:e.likeIdea.bind(e,o),id:a,className:"button button__clap"},"Clap"),t.leader===localStorage.getItem("fullName")&&i.a.createElement(f.a,{to:s},i.a.createElement("button",{className:"button button__small"},"Edit")),t.leader===localStorage.getItem("fullName")&&i.a.createElement("button",{onClick:e.deleteIdea.bind(e,o),id:a,className:"button button__small"},"Delete")))});e.setState({submissions:a.reverse()}),e.setState({liked:!1}),console.log(e.state.submissions)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"Submissions"},i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Idea name"),i.a.createElement("th",null,"Team"),i.a.createElement("th",null,"Actions")),this.state.submissions))}}]),t}(i.a.Component)),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={title:"",leader:"",description:"",submitting:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.user),i.a.createElement("div",null,i.a.createElement(E,{user:this.props.user,submitting:this.state.submitting,deleteIdea:this.deleteIdea}))}}]),t}(i.a.Component),y=a(83),O=a(239),S=a(237),C=a(238),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).title=null,a.links=null,a.renderCardTitle=a.renderCardTitle.bind(Object(u.a)(Object(u.a)(a))),a.renderCardLinks=a.renderCardLinks.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderCardLinks",value:function(){var e=this.props.links,t=[];if(e)return Object.values(e).map(function(e){e=i.a.createElement("button",{className:"button",onClick:e.onAction},e.content);t.push(e)}),t}},{key:"renderCardTitle",value:function(){if(this.props.title)return i.a.createElement("div",{className:"card-title"},i.a.createElement("h1",null,this.props.title),this.renderCardLinks())}},{key:"render",value:function(){return i.a.createElement("div",{className:"card"},this.renderCardTitle(),this.props.children)}}]),t}(i.a.Component),w=a(236),T=a(17),I=a.n(T),_=(a(49),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={title:"",description:"",leader:"",members:[],comments:[]},a.handleChangeTitle=a.handleChangeTitle.bind(Object(u.a)(Object(u.a)(a))),a.handleChangeDescription=a.handleChangeDescription.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleChangeDescription",value:function(e){this.setState({description:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("https://mighty-springs-20769.herokuapp.com/api/ideas",{name:this.state.title,leader:this.props.user.fullName,description:this.state.description,members:this.state.members,likes:0}).then(function(e){console.log(e,"idea noted!"),t.props.history.push("/Ideas")})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"idea-detail-left-column"},i.a.createElement(N,{id:"newIdea"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"Idea title",autofocus:"true",className:"idea-details-title-input",value:this.state.title,onChange:this.handleChangeTitle}),i.a.createElement(I.a,{placeholder:"Idea description",className:"idea-details-description-input",value:this.state.description,onChange:this.handleChangeDescription}),i.a.createElement("div",{className:"button-row"},i.a.createElement("div",{className:"button",onClick:this.handleSubmit},"Save idea"),i.a.createElement(f.a,{className:"button",to:"/ideas"},"Cancel"))))))}}]),t}(i.a.Component)),x=Object(w.a)(_),D=a(23),L=a(22),M=a.n(L),A=a(51),W=a.n(A),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={comments:""},a.id=a.props.id,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(e){var t=this.props.comments.map(function(e,t){return i.a.createElement("div",{className:"legitcomments",key:t,id:e._id},i.a.createElement("div",{className:"comment-header"},i.a.createElement("p",null,e.author),i.a.createElement("p",null,W.a.ago(e.date))),i.a.createElement("div",{className:"comment-body"},M()("".concat(e.text))))});this.setState({comments:t})}},{key:"componentDidUpdate",value:function(e){if(e.comments!==this.props.comments){var t=this.props.comments.map(function(e,t){return i.a.createElement("div",{className:"legitcomments",key:t,id:e._id},i.a.createElement("div",{className:"comment-header"},i.a.createElement("p",null,e.author),i.a.createElement("p",null,W.a.ago(e.date))),i.a.createElement("div",{className:"comment-body"},M()("".concat(e.text))))});this.setState({comments:t})}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"ideacomments"},i.a.createElement("div",{className:"commentlist"},this.state.comments)))}}]),t}(i.a.Component),B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).textLabel=a.props.textLabel||"Primary text",a.textStyle=a.props.textStyle||"regular",a.textAction=null,a.subTextLabel=a.props.subTextLabel||null,a.initials=a.props.initials||"D",a.backgroundColor=a.props.backgroundColor||"#2C3D4E",a.spacing=a.props.spacing||"m",a.setTextStyle=a.setTextStyle.bind(Object(u.a)(Object(u.a)(a))),a.setSpacing=a.setSpacing.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"setTextStyle",value:function(){if("regular"!==this.props.textStyle)return"bold"===this.props.textStyle?"type-strong":void 0}},{key:"setSpacing",value:function(){return"avatar spacing-stack-"+this.spacing}},{key:"render",value:function(){var e={backgroundColor:{backgroundColor:this.backgroundColor}};return i.a.createElement("div",{className:this.setSpacing()},i.a.createElement("div",{className:"avatar-initial",style:e.backgroundColor},this.initials),i.a.createElement("div",{className:"avatar-info"},i.a.createElement("div",{className:this.setTextStyle()},this.textLabel),i.a.createElement("div",{className:"type-small type-subdued"},this.subTextLabel)))}}]),t}(i.a.Component),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={members:""},a.id=a.props.id,a.deleteMember=a.deleteMember.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"deleteMember",value:function(e,t){var a=this,n=t.target.id,i="https://mighty-springs-20769.herokuapp.com/api/ideas/members/".concat(this.id),s=this.state.members.filter(function(e){return e.key===n});console.log(s[0].props.id),g.a.post(i,{deletionId:s[0].props.id}).then(function(e){console.log(e,"member removed")}).catch(function(e){console.log(e,"member not removed")}),this.setState(function(){return{members:a.state.members.filter(function(e){return e.key!==n})}})}},{key:"componentDidMount",value:function(e){var t=this;console.log(this.props.members);var a=this.props.members.map(function(e,a){var n=e._id;return i.a.createElement("div",{className:"avatarwrapper",key:a,id:e._id},i.a.createElement("div",{className:"avatarwrapper"},i.a.createElement(B,{initials:null==e.name?"X":e.name.charAt(0),textLabel:e.name,textStyle:"bold",subTextLabel:e.role,backgroundColor:"#FBB134"})),i.a.createElement("button",{id:a,onClick:t.deleteMember.bind(t,n),className:"button button__small"},"Leave Team"))});this.setState({members:a}),console.log(a)}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.members!==this.props.members){var a=this.props.members.map(function(e,a){var n=e._id;return i.a.createElement("div",{className:"avatarwrapper",key:a,id:e._id},i.a.createElement(B,{initials:null==e.name?"X":e.name.charAt(0),textLabel:e.name,textStyle:"bold",subTextLabel:e.role,backgroundColor:"#FBB134"}),i.a.createElement("a",{className:"memberlink",id:a,onClick:t.deleteMember.bind(t,n)},"Leave Team"))});this.setState({members:a}),console.log(a)}}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.members)}}]),t}(i.a.Component),G=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).result="",a.state={name:"",description:"",comments:[],leader:"",members:[],currentcomment:""},a.id=e.match.params.id,a.addMembers=a.addMembers.bind(Object(u.a)(Object(u.a)(a))),a.handleChangeComment=a.handleChangeComment.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmitComment=a.handleSubmitComment.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChangeComment",value:function(e){this.setState({currentcomment:e})}},{key:"handleSubmitComment",value:function(e){var t=this;e.preventDefault(),console.log(this.state);var a="https://mighty-springs-20769.herokuapp.com/api/idea/".concat(this.id),n={author:this.props.user.fullName,text:this.state.currentcomment,date:Date.now()};this.setState({comments:Object(D.a)(this.state.comments).concat([n])},function(){console.log(t.state.comments),g.a.put(a,{comments:t.state.comments}).then(function(e){console.log(e,"comment added"),t.setState({currentcomment:""}),console.log(t.state.comments),t.forceUpdate()})})}},{key:"deleteMember",value:function(e,t){var a=this,n=t.target.id,i="https://mighty-springs-20769.herokuapp.com/api/idea/members/".concat(this.id);g.a.put(i,{members:this.state.members.filter(function(e){return e.key!==n})}).then(function(e){console.log(e,"member removed")}).catch(function(e){console.log(e,"member not removed")}),this.setState(function(){return{members:a.state.members.filter(function(e){return e.key!==n})}})}},{key:"addMembers",value:function(){var e=this,t="https://mighty-springs-20769.herokuapp.com/api/idea/".concat(this.id),a={name:prompt("Enter the name of the new team member"),role:prompt("What will their role be?")};this.setState({members:Object(D.a)(this.state.members).concat([a])},function(){g.a.put(t,{members:e.state.members}).then(function(t){console.log(t,"member added"),console.log(e.state.members)})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://mighty-springs-20769.herokuapp.com/api/idea/"+this.id).then(function(e){return e.json()}).then(function(t){return e.setState({name:t.name,description:t.description,members:t.members,leader:t.leader,comments:t.comments,likes:t.likes},function(){console.log(e.state)})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"idea-detail-left-column"},i.a.createElement(N,{title:this.state.name},i.a.createElement("div",{className:"idea-details-description-input"},M()("".concat(this.state.description)))),i.a.createElement(N,{title:"Comments"},i.a.createElement(U,{id:this.id,comments:this.state.comments}),i.a.createElement(I.a,{placeholder:"Add a comment",className:"idea-details-description-input",value:this.state.currentcomment,onChange:this.handleChangeComment}),i.a.createElement("button",{className:"button",onClick:this.handleSubmitComment},"Post comment"))),i.a.createElement("div",{className:"idea-detail-right-column"},i.a.createElement(N,{title:"Team",links:[{content:"Join Team",onAction:this.addMembers}]},i.a.createElement(F,{id:this.id,members:this.state.members})),i.a.createElement(N,{title:"Claps \ud83d\udc4f"},i.a.createElement("div",{className:"idea-details-description-input"},"This idea has ",i.a.createElement("strong",null,i.a.createElement("i",null,null==this.state.likes?0:this.state.likes))," claps.")))))}}]),t}(i.a.Component),J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).result="",a.state={name:"",description:"",leader:"",members:[],title:""},a.handleChangeTitle=a.handleChangeTitle.bind(Object(u.a)(Object(u.a)(a))),a.handleChangeDescription=a.handleChangeDescription.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.addTeamMembers=a.addTeamMembers.bind(Object(u.a)(Object(u.a)(a))),a.id=e.match.params.id,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mighty-springs-20769.herokuapp.com/api/idea/"+this.id).then(function(e){return e.json()}).then(function(t){return e.setState({name:t.name,description:t.description,leader:t.leader,members:t.members})})}},{key:"handleChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleChangeDescription",value:function(e){this.setState({description:e})}},{key:"deleteIdea",value:function(e,t){var a=this,n=t.target.id,i="https://mighty-springs-20769.herokuapp.com/api/idea/".concat(e);g.a.delete(i).then(function(e){console.log(e,"idea deleted.")}).catch(function(e){console.log(e,"idea not deleted.")}),this.setState(function(){return{submissions:a.state.submissions.filter(function(e){return e.key!==n})}})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a="https://mighty-springs-20769.herokuapp.com/api/idea/".concat(this.id);g.a.put(a,{name:this.state.name,leader:this.state.leader,description:this.state.description}).then(function(e){console.log(e,"idea edited!"),t.props.history.push("/ideasShow/".concat(t.id))})}},{key:"addTeamMembers",value:function(){var e=this,t="https://mighty-springs-20769.herokuapp.com/api/idea/".concat(this.id),a={name:prompt("Enter the name of the new team member"),role:prompt("What will their role be?")};this.setState({members:Object(D.a)(this.state.members).concat([a])},function(){g.a.put(t,{members:e.state.members}).then(function(t){console.log(t,"member added"),console.log(e.state.members)})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"idea-detail-left-column"},i.a.createElement(N,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"What's your idea?",autofocus:"true",className:"idea-details-title-input",value:this.state.name,onChange:this.handleChangeTitle}),i.a.createElement(I.a,{placeholder:"Describe your idea",className:"idea-details-description-input",value:this.state.description,onChange:this.handleChangeDescription}),i.a.createElement("div",{className:"button-row"},i.a.createElement("div",{className:"button",onClick:this.handleSubmit},"Save idea"),i.a.createElement(f.a,{className:"button",to:"/ideas"},"Cancel"))))),i.a.createElement("div",{className:"idea-detail-right-column"},i.a.createElement(N,{title:"Team",links:[{content:"Add team members",onAction:this.addTeamMembers}]},i.a.createElement(F,{id:this.id,members:this.state.members}))))}}]),t}(i.a.Component),P=Object(w.a)(J),R=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),X=Object(w.a)(R),q=(a(232),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).logout=function(){e.setState({isAuthenticated:!1,token:"",user:null}),localStorage.removeItem("userid"),localStorage.removeItem("token"),localStorage.removeItem("fullName")},e.googleResponse=function(t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:t.accessToken}),mode:"cors",cache:"default"};fetch("https://mighty-springs-20769.herokuapp.com/api/google",a).then(function(t){var a=t.headers.get("x-auth-token");console.log(a),t.json().then(function(t){console.log("user email:",t.email),localStorage.setItem("userid",t.id),console.log(localStorage.getItem("userid")),a&&(localStorage.setItem("token",a),localStorage.setItem("fullName",t.fullName),e.setState({isAuthenticated:!0,user:t,token:a}),console.log(e.state),console.log(t))})})},e.state={route:"signin",isAuthenticated:!1,user:null,token:""},e.logout=e.logout.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token"),a=localStorage.getItem("userid");console.log(t);var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t,id:a}),mode:"cors",cache:"default"};fetch("https://mighty-springs-20769.herokuapp.com/api/google/auth",n).then(function(e){return e.json()}).then(function(n){n.id===a&&(e.setState({isAuthenticated:!0,user:n,token:t}),console.log(e.state))})}},{key:"render",value:function(){var e=this,t=this.state.user;return i.a.createElement(O.a,{basename:"/hackathon-voting"},i.a.createElement(X,null,i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"app-header"},i.a.createElement("h1",null,i.a.createElement(f.a,{to:"/ideas"},"Clio Hackathon Forum")),i.a.createElement("div",{className:"cond-button"},!0===this.state.isAuthenticated?i.a.createElement("div",{className:"button-row"},i.a.createElement("div",null,i.a.createElement(f.a,{to:"/ideasForm",className:"button"},"Submit an Idea")),i.a.createElement("div",{onClick:this.logout,className:"button"},"Log out")):i.a.createElement("div",null))),i.a.createElement("div",{className:"app-body"},i.a.createElement(S.a,{exact:!0,path:"/",render:function(t){return!0===e.state.isAuthenticated?i.a.createElement(C.a,{to:"/ideas"}):i.a.createElement("div",{className:"googsloginpage"},i.a.createElement(y.GoogleLogin,{clientId:h.GOOGLE_CLIENT_ID,render:function(e){return i.a.createElement("button",{className:"googlebutton",onClick:e.onClick},"Sign In")},buttonText:"Mufukin Google Login",onSuccess:e.googleResponse,onFailure:e.googleResponse}))}}),i.a.createElement(S.a,{path:"/ideas",render:function(e){return null===localStorage.getItem("token")?i.a.createElement(C.a,{to:"/"}):i.a.createElement(j,{user:t})}}),i.a.createElement(S.a,{path:"/ideasShow/:id",render:function(e){e.props;var a=e.match;return null===localStorage.getItem("token")?i.a.createElement(C.a,{to:"/"}):i.a.createElement(G,{user:t,match:a})}}),i.a.createElement(S.a,{path:"/ideasEdit/:id",render:function(t){t.props;var a=t.match;return!1===e.state.isAuthenticated?i.a.createElement(C.a,{to:"/"}):i.a.createElement(P,{match:a})}}),i.a.createElement(S.a,{path:"/ideasForm",render:function(a){return!1===e.state.isAuthenticated?i.a.createElement(C.a,{to:"/"}):i.a.createElement(x,{user:t})}})))))}}]),t}(n.Component)),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hackathon-voting",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/hackathon-voting","/service-worker.js");H?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Q(e)})}}()},82:function(e){e.exports={GOOGLE_CLIENT_ID:"1038130832109-eaq714lcf746ng13rg9j3fin17163de6.apps.googleusercontent.com"}},85:function(e,t,a){e.exports=a(234)}},[[85,2,1]]]);
//# sourceMappingURL=main.b70d88c2.chunk.js.map