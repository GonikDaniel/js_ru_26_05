import React, { PropTypes, Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 10,
};

class Article extends Component {

  render() {
    const { article } = this.props;

    if (!article) {
      return <h3>No articles</h3>
    }
    

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
          <RaisedButton label="Show comments" primary={true} style={buttonStyle} />
        </CardActions>
      </Card>
    );
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