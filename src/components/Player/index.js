import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Container, NavHeader, Middle, Footer } from './style'
import MiniPlayer from './MiniPlayer'
import PlayList from '../../connects/playList'
import Progress from '../Progress'
import { findIndex, rand, getCurrentTime } from '../../utils'

import { Song } from '../../models/song'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.playerBgRef = React.createRef()
    this.playImgRef = React.createRef()
    this.audioRef = React.createRef()
    this.state = {
      playStatus: false, // 播放状态
      showPlayList: false, // 显示播放列表
      currentTime: 0, // 当前播放时间点
      progress: 0 // 播放进度
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
    this.props.changePlayMode(mode)
  }
  // 显示播放列表
  showPlayList = (key) => {
    if (this.props.playSongs.length > 0) {
      this.setState({
        showPlayList: key
      })
    }
  }
  // 控制当前歌曲的播放或暂停
  handlePlay = () => {
    let audioDOM = this.audioRef.current
    if (!this.state.playStatus) { // 暂停状态
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
  handlePrev = () => {
    let playList = this.props.playSongs
    let currentId = this.props.currentIndex
    // 列表是否只有一首歌
    if (playList.length === 1) {
      this.handleLoop()
      return
    }
    let index = this.handleModeIndex(playList, currentId) - 1
    /**
     * 若为 0，表示当前歌曲为列表最后一个
     */
    if (index < 0) index = playList.length - 1
    console.log(index, '上一首')
    this.handleTogglePlay(playList[index])
  }
  // 下一首
  handleNext = () => {
    let playList = this.props.playSongs
    let currentId = this.props.currentIndex
    // 列表是否只有一首歌
    if (playList.length === 1) {
      this.handleLoop()
      return
    }
    let index = this.handleModeIndex(playList, currentId) + 1
    /**
     * 若为列表长度，表示当前歌曲为列表第一个
     */
    if (index === playList.length) index = 0
    console.log(index, '下一首')
    this.handleTogglePlay(playList[index])
  }
  // 循环播放
  handleLoop = () => {
    // 重置
    this.audioRef.current.currentTime = 0
    this.setState({
      playStatus: true
    })
    this.audioRef.current.play()
  }
  /**
   * 播放模式下的index
   * @list 播放列表
   * @id 当前歌曲的id
   */
  handleModeIndex = (list, id) => {
    let type = this.props.mode
    /**
     * 0 随机播放
     * 1 单曲循环
     * 2 列表循环
     */
    switch (type) {
      case 0: 
        return rand(list.length - 1)
      case 1: 
        return findIndex(id, list)
      default:
        return findIndex(id, list)
    }
  }
  // 上下切歌操作
  handleTogglePlay = (song) => {
    this.setState({
      playStatus: true
    })
    // 更改
    this.props.changeCurrentSong(song)
    this.props.changeCurrentIndex(song.id)
    this.audioRef.current.play()
  }
  // 更改当前歌曲和当前歌曲序号
  handleCurrent = (index) => {
    this.currentSong = this.props.playSongs[index]
    this.props.changeCurrentSong(this.currentSong)
    this.props.changeCurrentIndex(index)
  }
  // 实时更新进度条
  handleUpdateTime = () => {
    let audioDOM = this.audioRef.current
    let percent = audioDOM.currentTime / audioDOM.duration
    this.setState({
      currentTime: audioDOM.currentTime,
      progress: !isNaN(percent) ? percent : 0
    })
  }
  // 当前歌曲播放结束
  handleEnd = () => {
    console.log('结束')
    // 模式为单曲播放
    if (this.props.mode === 1) {
      this.handleLoop()
    } else {
      this.handleNext()
    }
  }
  handleError = () => {
    alert('播放歌曲出错！')
  }
  // 进度条
  handleChangeProgress = (percent) => {
    const newCurrentTime = percent * this.currentSong.duration
    let audioDOM = this.audioRef.current
    this.setState({
      currentTime: newCurrentTime
    })
    audioDOM.currentTime = newCurrentTime
    audioDOM.play()
    if (!this.state.playStatus) {
      this.setState({
        playStatus: true
      })
    }
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
          console.log('切歌')
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
                <div className="current-time">
                  {getCurrentTime(this.state.currentTime)}
                </div>
                <div className="play-progress">
                  <Progress
                    progress={this.state.progress}
                    changeProgress={this.handleChangeProgress}
                  />
                </div>
                <div className="total-time">
                  {getCurrentTime(this.currentSong.duration)}
                </div>
              </div>
              {/* 播放选项 */}
              <div className="player-control">
                <div onClick={() => { this.handlePlayMode(this.props.mode) }}>
                  <i
                    className="iconfont"
                    dangerouslySetInnerHTML={{ __html: playMode[`${this.props.mode}`].icon }}
                  ></i>
                </div>
                <div onClick={this.handlePrev}>
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
        {/* 音频标签 */}
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
          showList={this.showPlayList}
          show={this.state.showPlayList}
          currentIndex={currentIndex}
          playStatus={this.state.playStatus}
          controlPlay={this.handlePlay}
          changeCurrentIndex={this.handleCurrent}
        />
      </div>
    )
  }
}
