import React, { PropTypes, Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import ArticleList from './ArticleList';
import DatePickerContainer from '../containers/DatePickerContainer';

class App extends Component {

  render() {
    const { articles } = this.props
    const autoOk = true;

    return (
        <Grid>
          <Row>
            <Col xs={3}>
              <h4>Menu</h4>
              <DatePickerContainer autoOk = { autoOk } />
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
  articles: PropTypes.array.isRequired
}

export default App;
