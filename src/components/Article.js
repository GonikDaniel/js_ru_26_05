import React, { PropTypes, Component } from 'react';

import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import CommentList from './CommentList';

const style = {
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

    if (!isOpen) return null

    return (
      <div>
        <CardText expandable={true}>
          {article.text}
        </CardText>
        <CommentList article = { article } />
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