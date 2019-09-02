import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import Scroll from '../../Scroll'
import { Container, SongList } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  static defaultProps = {
    mode: 0
  }
  handleDelete(key) {
    console.log('删除', key)
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
    this.props.changMode(mode)
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
    const { mode } = this.props
    return (
      <CSSTransition
        in={this.props.show}
        timeout={300}
        classNames="pop"
        appear={true}
        unmountOnExit>
        {/*  onClick={this.handleClose.bind(this)} */}
        <Container className="player-list">
          <div className="cover-bg"></div>
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
            <div onClick={this.handleDelete.bind(this, 'all')}>
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
                        <li key={item + index} className="list-li">
                          <div className="info">
                            <span>{item.name}</span>
                            <span> - {item.singer}</span>
                          </div>
                          <div className="more" onClick={this.handleDelete.bind(this, index)}>
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
