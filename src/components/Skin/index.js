import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { SkinDiv } from './style'
import NavHeader from '../NavHeader'
import skinBg from '../../assets/images/skin_bg.jpg'

export default class Skin extends Component {
  constructor(props) {
    super(props)
    this.skinRef = React.createRef()
    this.state = {
      skins: [
        { key: 'mangoYellow', name: '芒果黄', color: '#FFD700' },
        { key: 'coolBlack', name: '炫酷黑', color: '#212121' },
        { key: 'kuGouBlue', name: '酷狗蓝', color: '#2CA2F9' },
        { key: 'netBaseRed', name: '网易红', color: '#D43C33' },
        { key: 'qqGreen', name: 'QQ绿', color: '#31C27C' }
      ]
    }
  }
  static propTypes = {
    // currentSkin: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    close: PropTypes.func
  }
  // 取消设置皮肤
  handleCancel() {
    console.log(this)
    this.props.close()
  }
  // 设置当前皮肤
  setCurrentSkin (key) {
    console.log(key)
  }
  render() {
    return (
      <CSSTransition in={this.props.show} timeout={300} classNames="pop"
        onEnter={() => {
          this.skinRef.current.style.display = "block";
        }}
        onExited={() => {
          this.skinRef.current.style.display = "none";
        }}>
        <SkinDiv ref={this.skinRef} imgUrl={skinBg}>
          <NavHeader
            title="皮肤中心"
            rightText="取消"
            cancel={this.handleCancel.bind(this)}
          />
          <div className="skin">
            {
              this.state.skins.map(skin => (
                <div
                  className="skin-wrapper"
                  onClick={this.setCurrentSkin.bind(this, skin.key)}
                  key={skin.key}
                >
                  <div
                    className="skin-color"
                    style={{ backgroundColor: skin.color, boxShadow: `0 0 3px ${skin.color}` }}
                  >
                    <i className="icon-right" style={{ display: skin.key === this.props.currentSkin ? "" : "none" }}></i>
                  </div>
                  <span>{skin.name}</span>
                </div>
              ))
            }
          </div>
        </SkinDiv>
      </CSSTransition>
    )
  }
}
