import React, { PropTypes, Component } from 'react';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import Article from './Article';
import oneOpen from '../decorators/one-open';

class ArticleList extends Component {

  render() {
    const { articles, isOpen, openItem } = this.props

    const articleItems = articles.map((article) =>
      <div key={article.id}>
        <Article article = {article}
                 isOpen = {isOpen(article.id)}
                 openArticle = {openItem(article.id)} />
        <Divider />
      </div>
    );

    return (
      <List>
        <Subheader>Today</Subheader>
        <div style={{boxShadow: '0 0 10px #f5f5f5'}}>
          {articleItems}
        </div>
      </List>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  isOpen: PropTypes.func.isRequired,
  openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList);
