import React, { PropTypes, Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

/**
 * Allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 */
export default class DatePickerToggle extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div>
        <DatePicker
          floatingLabelText="Filter articles by date"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}

DatePickerToggle.propTypes = {
  /**
   * Constructor for date formatting for the specified `locale`.
   * The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402).
   * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
   * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
   *
   * By default, a built-in `DateTimeFormat` is used which supports the 'en-US' `locale`.
   */
  DateTimeFormat: PropTypes.func,
  /**
   * If true, automatically accept and close the picker on select a date.
   */
  autoOk: PropTypes.bool,
  /**
   * Override the default text of the 'Cancel' button.
   */
  cancelLabel: PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Used to control how the Date Picker will be displayed when the input field is focused.
   * `dialog` (default) displays the DatePicker as a dialog with a modal.
   * `inline` displays the DatePicker below the input field (similar to auto complete).
   */
  container: PropTypes.oneOf(['dialog', 'inline']),
  /**
   * This is the initial date value of the component.
   * If either `value` or `valueLink` is provided they will override this
   * prop with `value` taking precedence.
   */
  defaultDate: PropTypes.object,
  /**
   * Disables the year selection in the date picker.
   */
  disableYearSelection: PropTypes.bool,
  /**
   * Disables the DatePicker.
   */
  disabled: PropTypes.bool,
  /**
   * Used to change the first day of week. It varies from
   * Saturday to Monday between different locales.
   * The allowed range is 0 (Sunday) to 6 (Saturday).
   * The default is `1`, Monday, as per ISO 8601.
   */
  firstDayOfWeek: PropTypes.number,
  /**
   * This function is called to format the date displayed in the input field, and should return a string.
   * By default if no `locale` and `DateTimeFormat` is provided date objects are formatted to ISO 8601 YYYY-MM-DD.
   *
   * @param {object} date Date object to be formatted.
   * @returns {any} The formatted date.
   */
  formatDate: PropTypes.func,
  /**
   * Locale used for formatting the `DatePicker` date strings. Other than for 'en-US', you
   * must provide a `DateTimeFormat` that supports the chosen `locale`.
   */
  locale: PropTypes.string,
  /**
   * The ending of a range of valid dates. The range includes the endDate.
   * The default value is current date + 100 years.
   */
  maxDate: PropTypes.object,
  /**
   * The beginning of a range of valid dates. The range includes the startDate.
   * The default value is current date - 100 years.
   */
  minDate: PropTypes.object,
  /**
   * Tells the component to display the picker in portrait or landscape mode.
   */
  mode: PropTypes.oneOf(['portrait', 'landscape']),
  /**
   * Override the default text of the 'OK' button.
   */
  okLabel: PropTypes.node,
  /**
   * Callback function that is fired when the date value changes.
   *
   * @param {null} null Since there is no particular event associated with the change,
   * the first argument will always be null.
   * @param {object} date The new date.
   */
  onChange: PropTypes.func,
  /**
   * Callback function that is fired when the Date Picker's dialog is dismissed.
   */
  onDismiss: PropTypes.func,
  /**
   * Callback function that is fired when the Date Picker's `TextField` gains focus.
   *
   * @param {object} event `focus` event targeting the `TextField`.
   */
  onFocus: PropTypes.func,
  /**
   * Callback function that is fired when the Date Picker's dialog is shown.
   */
  onShow: PropTypes.func,
  /**
   * Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
   *
   * @param {object} event TouchTap event targeting the `TextField`.
   */
  onTouchTap: PropTypes.func,
  /**
   * Callback function used to determine if a day's entry should be disabled on the calendar.
   *
   * @param {object} day Date object of a day.
   * @returns {boolean} Indicates whether the day should be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
  /**
   * Override the inline-styles of DatePicker's TextField element.
   */
  textFieldStyle: PropTypes.object,
  /**
   * Sets the date for the Date Picker programmatically.
   */
  value: PropTypes.object
}
