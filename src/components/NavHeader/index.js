import React, { Component } from 'react'
import { Header } from './style'

export default class NavHeader extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    debugger
    window.history.back();
  }
  render() {
    return (
      <Header>
        <span className="header-back" onClick={this.handleClick}>
          <i className="icon-back"></i>
        </span>
        <div className="header-title">
          {this.props.title}
        </div>
      </Header>
    )
  }
}
