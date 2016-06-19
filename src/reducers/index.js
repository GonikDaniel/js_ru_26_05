import { combineReducers } from 'redux';
import settings from './settings';
import articles from './articles';
import comments from './comments';
import datePickerFilter from './datePickerFilter';

const articlesApp = combineReducers({
  settings,
  articles,
  comments,
  datePickerFilter
});

export default articlesApp;
