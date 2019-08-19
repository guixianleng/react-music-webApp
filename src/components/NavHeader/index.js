import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from './style'

export default class NavHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // 
    }
  }
  // 静态校验
  static propTypes = {
    title: PropTypes.string.isRequired,
    rightText: PropTypes.string,
    cancel: PropTypes.func
  }
  static defaultProps = {
    rightText: ''
  }
  // 回退
  handleBack () {
    window.history.back()
  }
  handleCancel () {
    this.props.cancel()
  }
  render() {
    return (
      <Header>
        <div
          className="header-back"
          onClick={this.handleBack.bind(this)}
        >
          <i className="icon-back"></i>
        </div>
        <div className="header-title">
          {this.props.title}
        </div>
        <div
          className="header-right"
          onClick={this.handleCancel.bind(this)}
        >
          {this.props.rightText}
        </div>
      </Header>
    )
  }
}
