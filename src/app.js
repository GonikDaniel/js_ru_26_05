import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { articles } from './fixtures';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArticleList from './components/ArticleList';

import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <ArticleList articles = {articles} />
  </MuiThemeProvider>
);

render(
  <App />,
  document.getElementById('root')
);
