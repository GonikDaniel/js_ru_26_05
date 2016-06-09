import React, { Component as ReactComponent} from 'react'

export default (Component) => class OneOpen extends ReactComponent {
  state = {
    openedItem: null
  }

  openItem = id => ev => this.setState({
    openedItem: this.state.openedItem == id ? null : id
  })

  isOpen = id => this.state.openedItem == id

  render() {
    return <Component {...this.props} openItem = {this.openItem} isOpen = {this.isOpen} />
  }
}