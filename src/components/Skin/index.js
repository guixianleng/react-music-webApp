import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { SkinDiv } from './style'
import NavBar from '../NavBar'
import skinBg from '../../assets/images/skin_bg.jpg'

import { skins, setSkinStyle } from '../../utils/skin'
import emitter from '../../utils/events'

export default class Skin extends Component {
  constructor(props) {
    super(props)
    this.skinRef = React.createRef()
    this.state = {
      skins: [
        { key: 'mangoYellow', name: '芒果黄', color: '#FFA500' },
        { key: 'coolBlack', name: '炫酷黑', color: '#212121' },
        { key: 'kuGouBlue', name: '酷狗蓝', color: '#2CA2F9' },
        { key: 'netBaseRed', name: '网易红', color: '#D43C33' },
        { key: 'qqGreen', name: 'QQ绿', color: '#31C27C' }
      ]
    }
  }
  static propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
  }
  // 取消设置皮肤
  handleCancel() {
    this.props.close()
  }
  // 设置当前皮肤
  handleSetSkin (key) {
    this.props.setCurrentSkin(key)
    // 关闭皮肤中心
    this.props.close()
    // 切换皮肤
    emitter.emit('triggerTheme', setSkinStyle(skins[key]))
  }
  render() {
    return (
      <CSSTransition in={this.props.show} timeout={300} classNames="pop"
        onEnter={() => {
          this.skinRef.current.style.display = 'block';
        }}
        onExited={() => {
          this.skinRef.current.style.display = 'none';
        }}>
        <SkinDiv ref={this.skinRef} imgUrl={skinBg}>
          <NavBar
            showLeft={false}
            title="皮肤中心"
            rightText="取消"
            cancel={this.handleCancel.bind(this)}
          />
          <div className="skin">
            {
              this.state.skins.map(skin => (
                <div
                  className="skin-wrapper"
                  onClick={this.handleSetSkin.bind(this, skin.key)}
                  key={skin.key}
                >
                  <div
                    className="skin-color"
                    style={{ backgroundColor: skin.color, boxShadow: `0 0 3px ${skin.color}` }}
                  >
                    <i
                      className="iconfont icon-right"
                      style={{ display: skin.key === this.props.currentSkin ? '' : 'none' }}
                    >
                      &#xe648;
                    </i>
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
