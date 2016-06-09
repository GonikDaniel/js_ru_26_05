import React, { PropTypes, Component } from 'react';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
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
    const { article, openArticle } = this.props;

    if (!article) {
      return <h3>No article</h3>
    }
    

    return (
      <Card>
        <CardHeader
          onClick = { openArticle }
          title={article.author}
          subtitle={article.title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        { this.getBody() }
      </Card>
    );
  }

  getBody() {
    const { article, isOpen } = this.props
    const { showComments } = this.state

    if (!isOpen) return null

    const comments = showComments ?
      <CommentList comments = {article.comments || []}  /> : null;

    const buttonLabel = showComments ?
      'Hide comments' :
      'Show comments';

    return (
      <div>
        <CardText expandable={true}>
          {article.text}
        </CardText>
        <CardActions expandable={true}>
          <RaisedButton label={buttonLabel} primary={true} style={buttonStyle} onClick = {this.toggleComments} />
        </CardActions>
        {comments}
      </div>
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