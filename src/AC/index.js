import * as actions from '../constants/actions';

export const setMinDate = (date) => {
  console.log(actions.SET_MIN_DATE, date);
  return {
    type: actions.SET_MIN_DATE,
    date
  }
};

export const setMaxDate = (date) => {
  console.log(actions.SET_MAX_DATE, date);
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
