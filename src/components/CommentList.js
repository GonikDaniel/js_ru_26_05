import React, { PropTypes } from 'react';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Comment from './Comment';

function CommentList(props) {
  const { comments } = props;

  const commentItems = comments.map((comment) =>
    <div key={comment.id}>
      <Comment comment = {comment} />
      <Divider inset={true} />
    </div>
  );

  return (
      <Grid>
        <Row>
          <Col xsOffset={2} xs={8}>
            <List>
              <div style={{boxShadow: '0 0 10px #f5f5f5'}}>
                {commentItems}
              </div>
            </List>
          </Col>
        </Row>
      </Grid>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList;
