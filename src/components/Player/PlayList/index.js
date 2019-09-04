import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import Scroll from '../../Scroll'
import Loading from '../../../baseUI/Loading/Loading'
import { Container, SongList } from './style'
import { findIndex } from '../../../utils'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  static defaultProps = {
    mode: 0
  }
  // 删除列表歌曲
  handleDelete = (id) => {
    if (id === 'all') { // 删除所有
      this.props.showList(false)
      this.props.showMusicPlayer(false)
      this.props.controlPlay(false)
    }
    let currentId = findIndex(id, this.props.playSongs)
    console.log(currentId)
    // this.props.changeCurrentIndex(this.props.playSongs[currentId + 1].id)
    this.props.removeSong(id)
  }
  // 关闭
  handleClose = () => {
    this.props.showList(false)
  }
  // 切换播放模式
  handlePlayMode() {
    let mode = this.props.mode
    ++mode
    if (mode > 2) {
      mode = 0
    }
    this.props.changePlayMode(mode)
  }
  // 切换当前歌曲
  handleCurrentPlay = (song) => {
    this.props.changeCurrentSong(song)
    this.props.changeCurrentIndex(song.id)
  }
  render() {
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
    const { mode, currentIndex, playStatus } = this.props
    return (
      <CSSTransition
        in={this.props.show}
        timeout={300}
        classNames="pop"
        appear={true}
        unmountOnExit>
        <Container className="player-list">
          <div className="cover-bg" onClick={this.handleClose}></div>
          <header>
            <div onClick={() => { this.handlePlayMode() }}>
              <i className="iconfont"
                dangerouslySetInnerHTML={{ __html: playMode[`${mode}`].icon }}
              ></i>
              <span>
                {playMode[`${mode}`].name}
                <i style={{ display: mode === 0 ? '' : 'none' }}>({this.props.playSongs.length}首)</i>
              </span>
            </div>
            <div onClick={() => { this.handleDelete('all') }}>
              <i className="iconfont">&#xe64a;</i>
            </div>
          </header>
          <Scroll>
            <div>
              <SongList>
                <ul className="list-ul">
                  {
                    this.props.playSongs.map((item, index) => {
                      return (
                        <li key={item + index} className="list-li" onClick={() => { this.handleCurrentPlay(item) }}>
                          <div className="info">
                            <span className="info-name">{item.name}</span>
                            <span className="info-singer"> - {item.singer}</span>
                            <div style={{width: '60px'}}>
                              <Loading show={item.id === currentIndex} height={16} playStatus={playStatus}/>
                            </div>
                          </div>
                          <div className="more" onClick={() => { this.handleDelete(item.id) }}>
                            <i className="iconfont">&#xe64a;</i>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </SongList>
            </div>
          </Scroll>
          <div className="player-close" onClick={this.handleClose}>关闭</div>
        </Container>
      </CSSTransition>
    )
  }
}
