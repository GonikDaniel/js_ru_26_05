import { combineReducers } from 'redux';
import settings from './settings';
import articles from './articles';
import datePickerFilter from './datePickerFilter';

const articlesApp = combineReducers({
  articles,
  settings,
  datePickerFilter
});

export default articlesApp;
