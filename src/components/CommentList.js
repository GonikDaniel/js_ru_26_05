import React, { Component, PropTypes } from 'react';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


import Comment from './Comment';
import AddComment from '../containers/AddComment';

import toggleOpen from '../decorators/toggle-open';
import * as utils from '../utils';

const style = {
  list: {
    marginBottom: '20px'
  },
  comment: {
    boxShadow: '0 0 10px #f5f5f5'
  },
  commentButton: {
    margin: '10px'
  }
}

class CommentList extends Component {
  static defaultProps = {
  }

  static propTypes = {
      article: PropTypes.object.isRequired,
      //from toggleOpen decorator
      isOpen: PropTypes.bool,
      toggleOpen: PropTypes.func
  };
  
  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            { this.getToggler() }
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            { this.getList() }
          </Col>
        </Row>
      </div>
    );
  }

  getToggler() {
      const { isOpen, toggleOpen } = this.props
      const buttonLabel = isOpen ?
        'Hide comments' :
        'Show comments';
      
      return (
        <CardActions expandable={true}>
          <RaisedButton label = { buttonLabel } 
                        primary={ true } 
                        style={ style.commentButton } 
                        onClick = { toggleOpen } />
        </CardActions>
      );
  }

  getList() {
      const { article, isOpen } = this.props
      if (!isOpen) return null
      const comments = utils.getRelation(article, 'comments')
      if (!comments || !comments.length) return <h3>No comments yet</h3>
      if (comments.includes(undefined)) return <h3>Loading comments...</h3>

      const commentItems = comments.map((comment) =>
        <div key={comment.id}>
          <Comment comment = {comment} />
          <Divider inset={true} />
        </div>
      );

      return (
        <div>
          <AddComment articleId = { article.id } />
          <List style={ style.list }>
            <div style={ style.comment }>
              {commentItems}
            </div>
          </List>
        </div>
      );
  }

}

export default toggleOpen(CommentList);
