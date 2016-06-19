import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../AC/index';

import TextField from 'material-ui/TextField';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onKeyDown: e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        const input = e.target.value;

        if (!input.trim()) {
          return;
        }

        dispatch(addComment(ownProps.articleId, input));
      }
    }
  };
};

let AddComment = ({ onKeyDown }) => {
  return (
    <form>
      <TextField
        hintText="Hit enter when you finish"
        floatingLabelText="Your comment"
        multiLine={true}
        rows={2}
        fullWidth={true}
        onKeyDown={onKeyDown}
      />
    </form>
  );
}

AddComment = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);

export default AddComment;
