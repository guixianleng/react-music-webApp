import React, { Component } from 'react'

import { Content } from './style'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.progressBarRef = React.createRef()
    this.progressRef = React.createRef()
    this.progressBtnRef = React.createRef()
    this.progressBarWidth = 0
    this.progressBtnWidth = 0
    this.newProgressBarWidth = 0
  }
  componentDidMount () {
    // 进度条宽度
    this.progressBarWidth = this.progressBarRef.current.clientWidth
    // 按钮的宽度
    this.progressBtnWidth = this.progressBtnRef.current.clientWidth
    // 改变之后的进度条宽度
    this.newProgressBarWidth = this.progressBarWidth - this.progressBtnWidth
  }
  // 开始移动
  handleStart = (e) => {
    let touch = e.touches[0]
    // 起始位置
    this.startX = touch.clientX
    // 拖动按钮开始的left值
    this.buttonLeft = parseInt(touch.target.style.left, 10)
  }
  // 移动位置
  handleMove = (e) => {
    e.preventDefault()
    let touch = e.touches[0]
    // 拖动的距离
    const diffX = touch.clientX - this.startX
    // 拖动的left值
    let dragOffset = this.buttonLeft + diffX
    console.log(dragOffset, 'left值', this.progressBarWidth )
    if (dragOffset > this.newProgressBarWidth) {
      dragOffset = this.newProgressBarWidth
    } else if (dragOffset < 0) {
      dragOffset = 0
    }
    this.handleOffset(dragOffset)
  }
  handleEnd = () => {
    this.handleChangeProgress()
  }
  // 点击进度条
  handleClick = (e) => {
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
    const barWidth = this.progressBarRef.current.clientWidth - this.progressBtnWidth
    const curPercent = this.progressRef.current.clientWidth / barWidth
    this.props.changeProgress(curPercent)
  }
  // 处理位移
  handleOffset = (offsetWidth) => {
    // 设置进度条宽度
    this.progressRef.current.style.width = `${offsetWidth}px`
    // 设置按钮left值
    this.progressBtnRef.current.style.left = `${offsetWidth}px`
  }
  render() {
    // 进度值：0-1之间
    let { progress } = this.props
    if (!progress) progress = 0

    let btnOffsetLeft = 0
    if (this.progressBarWidth) {
      btnOffsetLeft = progress * (this.newProgressBarWidth)
    }
    return (
      <Content ref={this.progressBarRef} onClick={this.handleClick}>
        <div className="progress">
          <div
            className="progress-load"
            style={{ width: `${progress * 100}%` }}
            ref={this.progressRef}
          ></div>
          <div className="progress-btn"
            ref={this.progressBtnRef}
            onTouchStart={this.handleStart}
            onTouchMove={this.handleMove}
            onTouchEnd={this.handleEnd}
            style={{left: btnOffsetLeft}}
          ></div>
        </div>
      </Content>
    )
  }
}
