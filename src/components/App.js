import React, { PropTypes, Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import FilteredArticleList from '../containers/FilteredArticleList';
import DatePickerFilter from './DatePickerFilter';
import DatePickerContainer from '../containers/DatePickerContainer';

class App extends Component {

  render() {
    const autoOk = true;

    return (
        <Grid>
          <Row>
            <Col xs={3}>
              <h4>Menu</h4>
              <DatePickerContainer autoOk = { autoOk } />
            </Col>
            <Col xs={9}>
              <FilteredArticleList />
            </Col>
          </Row>
        </Grid>
    );
  }
}

App.propTypes = {}

export default App;
