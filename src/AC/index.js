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

//как и в случае с Flux - UI не лучшее место для генерации id
export const addComment = (id, name, text, articleId) => {
  return {
    type: 'ADD_COMMENT',
    id, name, text, articleId
  }
}
