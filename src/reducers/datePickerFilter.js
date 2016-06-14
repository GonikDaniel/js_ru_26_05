import { SET_MIN_DATE, SET_MAX_DATE } from '../constants/actions';

const defaultSettings = {
  minDate: new Date,
  maxDate: new Date
};

const datePickerFilter = (state = defaultSettings, action) => {
  switch (action.type) {
    case SET_MIN_DATE:
      return {
        ...state,
        minDate: action.date
      };
    case SET_MAX_DATE:
      return {
        ...state,
        maxDate: action.date
      };
    default:
      return state
  }
}

export default datePickerFilter
