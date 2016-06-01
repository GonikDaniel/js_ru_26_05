import React, { PropTypes } from 'react';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Article from './Article';

function ArticleList(props) {
  const { articles } = props

  const articleItems = articles.map((article) =>
    <div>
      <Article article = {article} key={article.id} />
      <Divider />
    </div>
  );

  return (
      <Grid>
        <Row>
          <Col xs={2}>
            <h4>Menu</h4>
          </Col>
          <Col xs={10}>
            <List>
              <Subheader>Today</Subheader>
              <div style={{boxShadow: '0 0 10px #f5f5f5'}}>
                {articleItems}
              </div>
            </List>
          </Col>
        </Row>
      </Grid>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleList;
