import React, { PropTypes, Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CommentList from './CommentList';

const buttonStyle = {
  margin: 10,
};

class Article extends Component {

  state = {
    showComments: false
  }

  render() {
    const { article } = this.props;
    const { showComments } = this.state

    if (!article) {
      return <h3>No articles</h3>
    }

    const comments = showComments ?
      <CommentList comments = {article.comments || []}  /> :
      'No comments';
    

    return (
      <Card>
        <CardHeader
          title={article.author}
          subtitle={article.title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {article.text}
        </CardText>
        <CardActions expandable={true}>
          <RaisedButton label="Show comments" primary={true} style={buttonStyle} onClick = {this.toggleComments} />
        </CardActions>
        {comments}
      </Card>
    );
  }

  toggleComments = (ev) => {
    this.setState({
      showComments: !this.state.showComments
    })
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