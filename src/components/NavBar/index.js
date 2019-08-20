import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from './style'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  // 静态校验
  static propTypes = {
    showLeft: PropTypes.bool, // 显示回退箭头
    title: PropTypes.string.isRequired,
    rightText: PropTypes.string,
    cancel: PropTypes.func
  }
  // 默认props
  static defaultProps = {
    showLeft: true,
    rightText: ''
  }
  // 回退
  handleBack() {
    window.history.back()
  }
  // 取消
  handleCancel() {
    this.props.cancel()
  }
  render() {
    return (
      <Header>
        <div className="header-back">
          <i
            className="iconfont"
            style={{ display: this.props.showLeft ? '' : 'none' }}
            onClick={this.handleBack.bind(this)}
          >
            &#xeb15;
          </i>
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
