import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../AC/index';

import TextField from 'material-ui/TextField';

import * as utils from '../utils';

let AddComment = ({ dispatch, articleId }) => {
  let input;

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();

      if (!input.value.trim()) {
        return;
      }

      const randomCommentId = utils.generateRandomAlphaNum(20);

      dispatch(addComment(randomCommentId, undefined, input.value, articleId));
      input.value = '';
    }
  }

  return (
    <form>
      <TextField
        hintText="Hit enter when you finish"
        floatingLabelText="Your comment"
        multiLine={true}
        rows={2}
        fullWidth={true}
        onKeyDown={onKeyDown}
        ref={node => {
          input = node.input.refs.input
        }}
      />
    </form>
  );
}

AddComment = connect()(AddComment);

export default AddComment;
