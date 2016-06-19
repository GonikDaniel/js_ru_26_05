import React, { PropTypes, Component } from 'react';

import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import '../assets/images/noPhoto.jpg';

function Comment(props) {

  const { comment } = props;  

  return (
    <ListItem
      leftAvatar={<Avatar src="/assets/noPhoto.jpg" />}
      primaryText={comment.name}
      secondaryText={
        <p>
          {comment.text}
        </p>
      }
      secondaryTextLines={2}
    />
  );

}


Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  options: PropTypes.object
}

export default Comment