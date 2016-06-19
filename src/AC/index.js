import * as actions from '../constants/actions';

export const setMinDate = (date) => {
  return {
    type: actions.SET_MIN_DATE,
    date
  }
};

export const setMaxDate = (date) => {
  return {
    type: actions.SET_MAX_DATE,
    date
  }
};

export const settingsUpdate = (settingName, value) => {
  return {
    type: actions.SETTINGS_UPDATE,
    settingName,
    value
  }
};

export const addComment = (id, text) => {
  console.log(id, text);
  return {
    type: 'ADD_COMMENT',
    id: id,
    text
  }
}
