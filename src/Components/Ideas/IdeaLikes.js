import React from 'react';

function IdeaLikes(props) {
  return( <div><span className="type-subdued type-small">👏 {(props.likes == null) ? 0 : props.likes }</span></div> )
}

// class IdeaLikes extends React.Component {
//   constructor(props) {
//     super(props);
//   }


// componentDidMount(props) {
//    let likes = 
//         <div>
//           <span className="type-subdued type-small">Likes: {(this.props.likes == null) ? 0 : this.props.likes }</span>
//         </div>
      
//     };

// componentDidUpdate(prevProps) {
//         if (prevProps.likes !== this.props.likes) {
//       this.forceUpdate();
//     }
//   }
  
//   render() {
//     return(
//       <div>
//         <span className="type-subdued type-small">Likes: {(this.props.likes == null) ? 0 : this.props.likes }</span>
//       </div>
//     )
//   }
// }


export default IdeaLikes;

