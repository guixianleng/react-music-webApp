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
    title: PropTypes.string,
    more: PropTypes.bool,
    rightText: PropTypes.string,
    deal: PropTypes.func // 右侧处理事件
  }
  // 默认props
  static defaultProps = {
    showLeft: true,
    rightText: '',
    title: '',
    more: false
  }
  // 回退
  handleBack() {
    window.history.back()
  }
  // 取消
  handleDeal() {
    this.props.deal()
  }
  render() {
    const label = '<i class="iconfont">&#xeb30;</i>'
    return (
      <Header className="header" bgImg={this.props.bgImg}>
        <div className="nav-back">
          <i
            className="iconfont"
            style={{ display: this.props.showLeft ? '' : 'none' }}
            onClick={this.handleBack.bind(this)}
          >
            &#xeb15;
          </i>
        </div>
        <div className="nav-title">
          {this.props.title}
        </div>
        <div
          className="nav-right"
          onClick={this.handleDeal.bind(this)}
          dangerouslySetInnerHTML={{__html: this.props.more ? label : `${this.props.rightText}`}}
        >
        </div>
      </Header>
    )
  }
}
