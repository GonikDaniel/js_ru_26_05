import React, { PropTypes, Component } from 'react';

import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import '../assets/images/noPhoto.jpg';

class Comment extends Component {

  render() {
    const { comment } = this.props;
    

    return (
      <ListItem
        leftAvatar={<Avatar src="/static/images/noPhoto.jpg" />}
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

}


Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  options: PropTypes.object
}

export default Comment