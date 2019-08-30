import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import Scroll from '../../Scroll'
import { Container, NavHeader, SongList } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      triggerModel: 0,
      songs: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    }
  }
  handleDelete(key) {
    console.log('删除', key)
  }
  handleClose() {
    this.props.close()
  }
  // 切换播放模式
  handleTriggerModel() {
    let model = this.state.triggerModel
    ++model
    if (model > 2) {
      model = 0
    }
    this.setState({
      triggerModel: model
    })
  }
  render() {
    const playModel = [
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
    return (
      <CSSTransition
        in={this.props.show}
        timeout={300}
        classNames="pop"
        appear={true}
        unmountOnExit>
        {/*  onClick={this.handleClose.bind(this)} */}
        <Container className="player-list">
          <header>
            <div onClick={() => { this.handleTriggerModel() }}>
              <i className="iconfont"
                dangerouslySetInnerHTML={{ __html: playModel[`${this.state.triggerModel}`].icon }}
              ></i>
              <span>
                {playModel[`${this.state.triggerModel}`].name}
                <i style={{ display: this.state.triggerModel === 0 ? '' : 'none' }}>({this.state.songs.length}首)</i>
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
                    this.state.songs.map((item, index) => {
                      return (
                        <li key={item + index} className="list-li">
                          <div className="info">
                            <span>遇见</span>
                            <span> - 童珺</span>
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
          <div className="player-close" onClick={this.handleClose.bind(this)}>关闭</div>
        </Container>
      </CSSTransition>
    )
  }
}
