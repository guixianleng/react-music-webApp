import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Container } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.miniPlayerRef = React.createRef()
    this.state = {  }
  }
  // 显示全屏播放器
  handleShow () {
    if (this.props.currentSong.url) {
      this.props.showPlayer(true)
    }
  }
  // 暂停或播放
  handlePlay () {
    if (this.props.currentSong.url) {
      this.props.controlPlay()
    }
  }
  // 播放列表
  showPlayList () {
    if (this.props.currentSong.url) {
      this.props.showList(true)
    }
  }
  render() {
    const { currentSong, playStatus } = this.props
    let imgStyle = {}
    // 控制图片动画帧
    if (playStatus) {
      imgStyle.WebkitAnimationPlayState = 'running'
      imgStyle.animationPlayState = 'running'
    } else {
      imgStyle.WebkitAnimationPlayState = 'paused'
      imgStyle.animationPlayState = 'paused'
    }
    let disabled = null
    // 当前歌曲不存在时， 禁用和隐藏样式
    if (!currentSong.url) {
      disabled = true
      imgStyle.display = 'none'
    }
    return (
      <CSSTransition
        in={!this.props.show}
        timeout={300}
        classNames="pop"
        appear={true}
        unmountOnExit>
        <Container ref={this.miniPlayerRef}>
          <div className="mini-player">
            <div
              className="mini-player__left rotate"
              onClick={() => { this.handleShow() }}
              style={imgStyle}
            >
              <img src={currentSong.img} alt="music" onError={(e) => {
                e.currentTarget.src = require('../../../assets/images/default_music.png')
              }} />
            </div>
            <div className={`mini-player__center ${disabled ? 'is_disabled' : ''}`} onClick={() => { this.handleShow() }}>
              <span>
                {
                  currentSong.name || 'QQ音乐，让生活充满音乐'
                }
              </span>
              <span>
                {
                  currentSong.singer || ''
                }
              </span>
            </div>
            <div className={`mini-player__right ${disabled ? 'is_disabled' : ''}`}>
              <i
                className="iconfont"
                onClick={() => { this.handlePlay() }}
                dangerouslySetInnerHTML={{__html: playStatus ? '&#xe669;' : '&#xe666;'}}
                ></i>
              <i className="iconfont" onClick={() => { this.showPlayList(true) }}>&#xe614;</i>
            </div>
          </div>
        </Container>
      </CSSTransition>
    )
  }
}
