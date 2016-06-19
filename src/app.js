import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ReduxToastr from 'react-redux-toastr';

// import { articles } from './fixtures';
import App from './components/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'react-redux-toastr/src/less/index.less'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const AppContainer = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <div>
        <App />
        {/* props are not required */}
        <ReduxToastr
          timeOut={3000}
          position='top-left'
          transitionIn={'slideDown'}
          transitionOut='slideUp' />
      </div>
    </Provider>
  </MuiThemeProvider>
);

render(
  <AppContainer />,
  document.getElementById('root')
);
