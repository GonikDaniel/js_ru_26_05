import { combineReducers } from 'redux';
import settings from './settings';
import articles from './articles';
import comments from './comments';
import datePickerFilter from './datePickerFilter';
import { reducer as toastr } from 'react-redux-toastr'

const articlesApp = combineReducers({
  settings,
  articles,
  comments,
  datePickerFilter,
  toastr
});

export default articlesApp;
