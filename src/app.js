import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import { articles } from './fixtures';
import App from './components/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const AppContainer = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

render(
  <AppContainer />,
  document.getElementById('root')
);
