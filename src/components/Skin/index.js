import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import { SliderPicker } from 'react-color'

import { SkinDiv, PickColor } from './style'
import NavBar from '../NavBar'
import skinBg from '../../assets/images/skin_bg.jpg'

import { setSkinStyle } from '../../utils/skin'
import emitter from '../../utils/events'

export default class Skin extends Component {
  constructor(props) {
    super(props)
    this.skinRef = React.createRef()
    this.state = {
      color: '#194D33',
      colorBg: '#194D33',
      skins: [
        { key: 'mangoYellow', name: '芒果黄', color: '#FFA500' },
        { key: 'coolBlack', name: '炫酷黑', color: '#212121' },
        { key: 'kuGouBlue', name: '酷狗蓝', color: '#2CA2F9' },
        { key: 'netBaseRed', name: '网易红', color: '#D43C33' },
        { key: 'qqGreen', name: 'QQ绿', color: '#31C27C' },
        { key: 'lovelyPink', name: '芭比粉', color: '#FF7A9E' },
        { key: 'elegantPurple', name: '优雅紫', color: '#341677' },
        { key: 'gold', name: '暗金', color: '#9B7300' }
      ]
    }
  }
  // 切换tab
  handleChangeTabs(item) {
    this.setState({
      activeIndex: item.key
    })
  }
  // 切换自定义主题
  handleChangeComplete = (color) => {
    this.setState({
      color: color.hex
    }, () => {
      this.handleSetSkin({
        name: 'userDefined',
        color: color.hex
      })
    })
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
  handleSetSkin(key) {
    this.props.setCurrentSkin(key)
    // 关闭皮肤中心
    this.props.close()
    // 切换皮肤
    emitter.emit('triggerTheme', setSkinStyle(key.name, key.color))
  }
  // 自定义皮肤
  handleDefinedSkin = () => {
    this.handleSetSkin({
      name: 'userDefined',
      color: this.state.color
    })
  }
  render() {
    return (
      <CSSTransition
        in={this.props.show}
        timeout={300}
        classNames="pop-right"
        appear={true}
        unmountOnExit
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
            deal={this.handleCancel.bind(this)}
          />
          <div className="skin-content">
            <h1>主题</h1>
            <div className="skin">
              {
                this.state.skins.map(skin => (
                  <div
                    className="skin-wrapper"
                    onClick={this.handleSetSkin.bind(this, {name: skin.key, color: skin.color})}
                    key={skin.key}
                  >
                    <div
                      className="skin-color"
                      style={{ backgroundColor: skin.color, boxShadow: `0 0 1px ${skin.color}` }}
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
            <h1>自定义</h1>
            <PickColor className="pick-color">
              <div
                className="left"
                onClick={this.handleDefinedSkin}
                style={{background: this.state.color}}
              >
                  <i
                    className="iconfont icon-defined"
                    style={{ display: this.props.currentSkin === 'userDefined' ? '' : 'none' }}
                  >
                    &#xe648;
                  </i>
              </div>
              <div className="right">
                <SliderPicker
                  color={this.state.color}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
            </PickColor>
          </div>
        </SkinDiv>
      </CSSTransition>
    )
  }
}
