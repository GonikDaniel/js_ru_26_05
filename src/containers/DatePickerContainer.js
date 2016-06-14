import { connect } from 'react-redux';
import { setMinDate, setMaxDate, settingsUpdate } from '../AC/index';
import DatePickerFilter from '../components/DatePickerFilter';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    // autoOk: ownProps.autoOk === state.settings.autoOk
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeMinDate: (e, date) => {
      dispatch(setMinDate(date))
    },
    handleChangeMaxDate: (e, date) => {
      dispatch(setMaxDate(date))
    },
    handleToggle: (e, toggled) => {
      const value = ownProps[e.target.name];
      dispatch(settingsUpdate(e.target.name, value));
    }
  };
}

const DatePickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerFilter)

export default DatePickerContainer
