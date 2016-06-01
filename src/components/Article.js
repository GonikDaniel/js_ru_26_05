import React, { PropTypes, Component } from 'react';
import { ListItem } from 'material-ui/List';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class Article extends Component {

  state = {
    isOpen: false
  }

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;

    if (!article) {
      return <h3>No article</h3>
    }
    
    const body = isOpen ? <section>{article.text}</section> : null;

    return (
      <ListItem
        rightIconButton={rightIconMenu}
        primaryText={article.author}
        onClick = {this.toggleOpen}
        secondaryText={
          <div>
            <h3 style={{color: darkBlack}}>{article.title}</h3>
            {body}
          </div>
        }
        secondaryTextLines={2}
      />
    );
  }

  toggleOpen = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}


Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    id: PropTypes.string.isRequired
  }),
  options: PropTypes.object
}

export default Article