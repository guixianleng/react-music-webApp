import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { Cover } from './style'
import Skin from '../../connects/Skin'

export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.coverRef = React.createRef()
    this.state ={
      showCenter: false // 显示皮肤中心
    }
    this.handleClose = this.handleClose.bind(this)
  }
  // 类型静态校验
  static propTypes = {
    showMenu: PropTypes.bool,
  }
  // 默认props
  static defaultProps = {
    showMenu: false
  }
  // 显示皮肤中心
  skinCenter () {
    this.handleClose()
    this.setState({
      showCenter: !this.state.showCenter
    })
  }
  // 关闭菜单
  handleClose () {
    this.props.closeMenu()
  }
  render() {
    return (
      <div>
        <CSSTransition
          in={this.props.show}
          timeout={300} classNames="fade"
          onEnter={() => {
            this.coverRef.current.style.display = "block";
          }}
          onExited={() => {
            this.coverRef.current.style.display = "none";
          }}>
          <Cover ref={this.coverRef} onClick={this.handleClose}>
            <div className="cover-wrapper">
              <div onClick={this.skinCenter.bind(this)}>
                皮肤中心
              </div>
              <div className="cover-wrapper--close" onClick={this.handleClose}>
                关闭
              </div>
            </div>
          </Cover>
        </CSSTransition>
        <Skin
          show={this.state.showCenter}
          theme={this.handleTheme.bind(this)}
          close={this.skinCenter.bind(this)} />
      </div>
    )
  }
}
