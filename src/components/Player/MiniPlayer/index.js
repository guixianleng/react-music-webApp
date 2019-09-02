import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Container } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.miniPlayerRef = React.createRef()
    this.state = {
      playStatus: false // 播放或暂停
    }
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
      this.setState({
        playStatus: !this.state.playStatus
      })
    }
  }
  // 播放列表
  showPlayList () {
    if (this.props.currentSong.url) {
      this.props.showList(true)
    }
  }
  render() {
    const { currentSong } = this.props
    let imgStyle = {}
    // 控制图片动画帧
    if (this.state.playStatus) {
      imgStyle.WebkitAnimationPlayState = 'running'
      imgStyle.animationPlayState = 'running'
    } else {
      imgStyle.WebkitAnimationPlayState = 'paused'
      imgStyle.animationPlayState = 'paused'
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
                e.currentTarget.src = require('../../../assets/images/music.png')
              }} />
            </div>
            <div className="mini-player__center" onClick={() => { this.handleShow() }}>
              <span>
                {
                  currentSong.name
                }
              </span>
            </div>
            <div className="mini-player__right">
              <i
                className="iconfont"
                onClick={() => { this.handlePlay() }}
                dangerouslySetInnerHTML={{__html: this.state.playStatus ? '&#xe669;' : '&#xe666;'}}
                ></i>
              <i className="iconfont" onClick={() => { this.showPlayList(true) }}>&#xe614;</i>
            </div>
          </div>
        </Container>
      </CSSTransition>
    )
  }
}
