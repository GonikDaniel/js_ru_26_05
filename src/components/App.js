import React, { PropTypes, Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import ArticleList from './ArticleList';
import DatePickerToggle from './DatePickerToggle';

class App extends Component {

  render() {
    const { articles } = this.props

    return (
        <Grid>
          <Row>
            <Col xs={3}>
              <h4>Menu</h4>
              <DatePickerToggle />
            </Col>
            <Col xs={9}>
              <ArticleList articles = { articles } />
            </Col>
          </Row>
        </Grid>
    );
  }
}

App.propTypes = {
  articles: PropTypes.array.isRequired,
  isOpen: PropTypes.func.isRequired,
  openItem: PropTypes.func.isRequired
}

export default App;
