import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { articles } from './fixtures';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const Container = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App articles = {articles} />
  </MuiThemeProvider>
);

render(
  <Container />,
  document.getElementById('root')
);
