import React, { PropTypes, Component } from 'react';

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CommentList from './CommentList';

const style = {
  commentButton: {
    margin: 10
  },
  noArticle: {
    padding: 10,
    color: '#e7e7e7'
  }
};

class Article extends Component {

  state = {
    showComments: false
  }

  render() {
    const { article, openArticle } = this.props;

    if (!article) {
      return <p style={ style.noArticle } >No article</p>
    }
    

    return (
      <Card>
        <CardHeader
          onClick = { openArticle }
          title={article.author}
          subtitle={new Date(article.date).toString()}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle subtitle={article.title} />
        { this.getBody() }
      </Card>
    );
  }

  getBody() {
    const { article, isOpen } = this.props
    const { showComments } = this.state

    if (!isOpen) return null

    const comments = showComments ?
      <CommentList comments = {article.comments || []} articleId = {article.id}  /> : null;

    const buttonLabel = showComments ?
      'Hide comments' :
      'Show comments';

    return (
      <div>
        <CardText expandable={true}>
          {article.text}
        </CardText>
        <CardActions expandable={true}>
          <RaisedButton label={buttonLabel} primary={true} style={style.commentButton} onClick = {this.toggleComments} />
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