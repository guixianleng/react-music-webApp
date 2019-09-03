import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Container, NavHeader, Middle, Footer } from './style'
import MiniPlayer from './MiniPlayer'
import PlayList from '../../connects/playList'

import { Song } from '../../models/song'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.playerBgRef = React.createRef()
    this.playImgRef = React.createRef()
    this.audioRef = React.createRef()
    this.state = {
      playStatus: false, // 播放状态
      mode: 0, // 播放模式
      showPlayList: false // 显示播放列表
    }
    // 初始化当前歌曲
    this.currentSong = new Song(0, '', '', '', 0, '', '')
  }
  // 默认props
  static defaultProps = {
    currentIndex: 0
  }
  // 显示或隐藏播放器
  handleShowPlayer = (key) => {
    this.props.showMusicPlayer(key)
  }
  // 更改播放模式
  handlePlayMode = (key) => {
    let mode = key
    ++mode
    if (mode > 2) {
      mode = 0
    }
    this.setState({
      mode: mode
    })
  }
  // 显示播放列表
  showPlayList = (key) => {
    if (this.props.playSongs.length > 0) {
      this.setState({
        showPlayList: key
      })
    }
  }
  // 播放或暂停
  handlePlay = () => {
    let audioDOM = this.audioRef.current
    if (!this.state.playStatus) {
      if (!audioDOM.src) {
        audioDOM.src = this.currentSong.url
      }
      audioDOM.play()
    } else {
      audioDOM.pause()
    }
    this.setState({
      playStatus: !this.state.playStatus
    })
  }
  componentDidMount () {
    let audioDOM = this.audioRef.current    
    audioDOM.addEventListener('canplay', () => {
      audioDOM.play()
      this.setState({
        playStatus: true
      })
    }, false)
  }
  // 上一首
  handlePrevious = () => {

  }
  // 下一首
  handleNext = () => {

  }
  // 更改当前歌曲序
  handleCurrentIndex = (index) => {
    this.currentSong = this.props.playSongs[index]
    this.props.changeCurrentSong(this.currentSong)
    this.props.changeCurrentIndex(index)
  }
  handleUpdateTime = (e) => {
    // console.log(e)
  }
  handleEnd = () => {
    console.log('结束')
  }
  handleError = () => {
    alert('播放歌曲出错！')
  }
  render() {
    // 播放模式
    const playMode = [
      {
        name: '随机播放',
        icon: '&#xe66b;'
      },
      {
        name: '单曲循环',
        icon: '&#xe608;'
      },
      {
        name: '列表循环',
        icon: '&#xe609;'
      }
    ]
    let imgStyle = {}
    // 控制图片动画帧
    if (this.state.playStatus) {
      imgStyle.WebkitAnimationPlayState = 'running'
      imgStyle.animationPlayState = 'running'
    } else {
      imgStyle.WebkitAnimationPlayState = 'paused'
      imgStyle.animationPlayState = 'paused'
    }
    const { currentSong, currentIndex } = this.props
    if (currentSong && currentSong.url) {
      // 当前歌曲发生变化
      if (this.currentSong.id !== currentSong.id) {
        this.currentSong = currentSong
        let audioDOM = this.audioRef.current
        if (audioDOM) {
          console.log(this.currentSong.url, '切歌')
          audioDOM.src = this.currentSong.url
          // 加载资源，ios需要调用此方法
          audioDOM.load()
        }
      }
    }
    return (
      <div>
        <CSSTransition
          in={this.props.showPlayer}
          timeout={300}
          classNames="pop"
          appear={true}
          unmountOnExit>
          <Container ref={this.playerBgRef} bgImg={this.currentSong.img}>
            <NavHeader>
              <div className="player-close" onClick={() => { this.handleShowPlayer(false) }}>
                <i className="iconfont">&#xe624;</i>
              </div>
              <div className="player-title">
                {this.currentSong.name}
            </div>
              <div className="player-more">
                <i className="iconfont">&#xeb30;</i>
              </div>
            </NavHeader>
            <div className="player-top">
              <span className="singer-name">
                &nbsp;{this.currentSong.singer}&nbsp;
              </span>
            </div>
            <Middle>
              <div className="play-img rotate" ref={this.playImgRef} style={imgStyle}>
                <img src={this.currentSong.img} alt="" />
              </div>
            </Middle>
            <Footer>
              {/* 进度条 */}
              <div className="player-progress">
                {/* <span className="current-time">
                  {getTime(this.state.currentTime)}
                </span>
                <div className="play-progress">
                  <Progress progress={this.state.playProgress}
                    onClick={this.handleClick}
                    onDrag={this.handleDrag}
                    onDragEnd={this.handleDragEnd} />
                </div>
                <span className="total-time">{getTime(song.duration)}</span> */}
              </div>
              {/* 播放选项 */}
              <div className="player-control">
                <div onClick={() => { this.handlePlayMode(this.state.mode) }}>
                  <i
                    className="iconfont"
                    dangerouslySetInnerHTML={{ __html: playMode[`${this.state.mode}`].icon }}
                  ></i>
                </div>
                <div onClick={this.handlePrevious}>
                  <i className="iconfont previous">&#xe60c;</i>
                </div>
                <div onClick={this.handlePlay}>
                  <i
                    className="iconfont play-button"
                    dangerouslySetInnerHTML={{ __html: this.state.playStatus ? '&#xe669;' : '&#xe666;' }}
                  ></i>
                </div>
                <div onClick={this.handleNext}>
                  <i className="iconfont next">&#xe6a1;</i>
                </div>
                <div onClick={() => { this.showPlayList(true) }}>
                  <i className="iconfont">&#xe614;</i>
                </div>
              </div>
            </Footer>
            <div className="background"></div>
          </Container>
        </CSSTransition>
        <audio
          ref={this.audioRef}
          onTimeUpdate={this.handleUpdateTime}
          onEnded={this.handleEnd}
          onError={this.handleError}
        ></audio>
        {/* mini播放器 */}
        <MiniPlayer
          show={this.props.showPlayer}
          showList={this.showPlayList}
          currentSong={this.currentSong}
          controlPlay={this.handlePlay}
          playStatus={this.state.playStatus}
          showPlayer={() => { this.handleShowPlayer(true) }}
        />
        {/* 播放列表 */}
        <PlayList
          mode={this.state.mode}
          changMode={this.handlePlayMode}
          showList={this.showPlayList}
          show={this.state.showPlayList}
          currentIndex={currentIndex}
          playStatus={this.state.playStatus}
          changeCurrentIndex={this.handleCurrentIndex}
        />
      </div>
    )
  }
}
