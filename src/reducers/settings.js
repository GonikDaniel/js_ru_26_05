import { SETTINGS_UPDATE } from '../constants/actions';

const defaultSettings = {
  autoOk: true
};

const settings = (state = defaultSettings, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE:
      return {
        ...state,
        [action.settingName]: !state[action.settingName]
      };
    default:
      return state
  }
}

export default settings;
