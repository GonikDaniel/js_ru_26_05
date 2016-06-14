import { combineReducers } from 'redux';
import settings from './settings';
import datePickerFilter from './datePickerFilter';

const articlesApp = combineReducers({
  settings,
  datePickerFilter
});

export default articlesApp;
