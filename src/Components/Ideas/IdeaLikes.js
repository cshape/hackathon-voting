import React from 'react';

function IdeaLikes(props) {
  return( <div className="clapper"><span className="type-subdued type-small">👏 {(props.likes == null) ? 0 : props.likes }</span></div> )
}

export default IdeaLikes;