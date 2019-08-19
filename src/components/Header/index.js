import React, { Component } from 'react'
import { HeaderDiv } from './style'

import logo from '../../assets/images/logo.png'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  // 处理菜单
  handleMenu (show) {
    this.props.menu(show)
  }
  render() {
    return (
      <HeaderDiv>
        <i
          className="icon-et-more header-more"
          onClick={this.handleMenu.bind(this, true)}>
        </i>
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">
          {this.props.title}
        </h1>
      </HeaderDiv>
    )
  }
}
