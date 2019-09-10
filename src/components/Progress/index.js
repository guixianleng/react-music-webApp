import React, { Component } from 'react'

import { Content } from './style'

export default class index extends Component {
  constructor (props) {
    super(props)
    // refs
    this.progressBarRef = React.createRef()
    this.progressRef = React.createRef()
    this.progressBtnRef = React.createRef()
    // 定义变量
    this.touch = {}
    this.progressBarWidth = 0
    this.progressBtnWidth = 0
    this.newProgressBarWidth = 0
  }
  componentDidMount () {
    // 进度条宽度
    this.progressBarWidth = this.progressBarRef.current.clientWidth
    // 拖动按钮的宽度
    this.progressBtnWidth = this.progressBtnRef.current.clientWidth
    // 改变之后的进度条宽度
    this.newProgressBarWidth = this.progressBarWidth - this.progressBtnWidth
  }
  // 开始移动
  handleStart = (e) => {
    this.touch.initiated = true
    // 起始位置
    this.touch.startX = e.touches[0].pageX
    // 拖动按钮初始left值
    this.touch.left = this.progressRef.current.clientWidth
  }
  // 移动位置
  handleMove = (e) => {
    if (!this.touch.initiated) {
      return
    }
    // 拖动的距离
    const dragX = e.touches[0].pageX - this.touch.startX
    // 拖动的left值
    const dragLeft = this.touch.left + dragX
    // 取值范围
    const offsetWidth = Math.min(this.newProgressBarWidth, Math.max(0, dragLeft))
    this.handleOffset(offsetWidth)
    this.handleChangeProgress()
  }
  handleEnd = () => {
    this.touch.initiated = false
  }
  // 点击进度条
  handleClick = (e) => {
    this.touch.initiated = true
    const rect = this.progressBarRef.current.getBoundingClientRect()
    let clickOffset = e.clientX - rect.left
    if (clickOffset > this.newProgressBarWidth) {
      clickOffset = this.newProgressBarWidth
    }
    this.handleOffset(clickOffset)
    this.handleChangeProgress()
  }
  // 改变进度条
  handleChangeProgress = () => {
    const barWidth = this.newProgressBarWidth
    const curPercent = this.progressRef.current.clientWidth / barWidth
    this.props.changeProgress(curPercent)
  }
  // 处理位移
  handleOffset = (offsetWidth) => {
    // 设置进度条宽度
    this.progressRef.current.style.width = `${offsetWidth}px`
    // 设置按钮left值
    this.progressBtnRef.current.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
  }
  render() {
    let { progress } = this.props
    if (progress >= 0 && this.progressBarWidth && !this.touch.initiated) {
      const offsetWidth = progress * this.newProgressBarWidth
      this.handleOffset(offsetWidth)
    }

    return (
      <Content ref={this.progressBarRef} onClick={this.handleClick}>
        <div className="progress">
          <div
            className="progress-load"
            ref={this.progressRef}
          ></div>
          <div className="progress-btn"
            ref={this.progressBtnRef}
            onTouchStart={this.handleStart}
            onTouchMove={this.handleMove}
            onTouchEnd={this.handleEnd}
          ></div>
        </div>
      </Content>
    )
  }
}
