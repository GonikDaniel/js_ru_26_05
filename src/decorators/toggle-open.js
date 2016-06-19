import React, { Component } from 'react';

export default (CustomComponent) => class DecoratedComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleOpen = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <CustomComponent {...this.props} isOpen = { this.state.isOpen } toggleOpen = { this.toggleOpen } />
  }
}