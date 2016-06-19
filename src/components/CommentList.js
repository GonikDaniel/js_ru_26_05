import React, { PropTypes } from 'react';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Comment from './Comment';
import AddComment from '../containers/AddComment';

const style = {
  marginBottom: '20px'
}

function CommentList(props) {
  const { comments, articleId } = props;

  const commentItems = comments.map((comment) =>
    <div key={comment.id}>
      <Comment comment = {comment} />
      <Divider inset={true} />
    </div>
  );

  return (
      <Row>
        <Col xsOffset={1} xs={10}>
          <AddComment articleId={articleId} />
          <List style={ style }>
            <div style={{boxShadow: '0 0 10px #f5f5f5'}}>
              {commentItems}
            </div>
          </List>
        </Col>
      </Row>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList;
