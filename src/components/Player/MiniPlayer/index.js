import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import PlayerList from '../PlayerList'
import { Container } from './style'
import demo from '../../../assets/images/demo_bg.jpg'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.miniPlayerRef = React.createRef()
    this.state = {
      playStatus: false, // 播放或暂停
      showPlayerList: false
    }
  }
  // 显示全屏播放器
  handleShow () {
    console.log('显示全屏播放器')
    // if (this.props.song.url) {
    //   this.props.showPlayer()
    // }
  }
  // 暂停或播放
  handlePlay () {
    console.log('暂停或者播放')
    this.setState({
      playStatus: !this.state.playStatus
    })
  }
  // 播放列表
  handlePlayList () {
    console.log('显示播放列表')
    this.setState({
      showPlayerList: true
    })
  }
  render() {
    return (
      <CSSTransition
        in={!this.props.show}
        timeout={300}
        classNames="pop"
        appear={true}
        unmountOnExit>
        <Container ref={this.miniPlayerRef}>
          <div className="mini-player">
            <div className="mini-player__left rotate" onClick={() => { this.handleShow() }}>
              <img src={demo} alt="music" />
            </div>
            <div className="mini-player__center" onClick={() => { this.handleShow() }}>
              <span>
                遇到（伴奏）
              </span>
            </div>
            <div className="mini-player__right">
              <i
                className="iconfont"
                onClick={() => { this.handlePlay() }}
                dangerouslySetInnerHTML={{__html: this.state.playStatus ? '&#xe666;' : '&#xe669;'}}
                ></i>
              <i className="iconfont" onClick={() => { this.handlePlayList() }}>&#xe614;</i>
            </div>
          </div>
          <PlayerList
            show={this.state.showPlayerList}
            close={() => { this.setState({ showPlayerList: false }) }}
          />
        </Container>
      </CSSTransition>
    )
  }
}
