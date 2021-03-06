import React, { Component } from 'react'
import { SongList, SongItem, Content } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  static defaultProps = {
    songList: []
  }
  // 批量操作
  handleBatch (pos) {
    this.props.batch(pos)
  }
  // 播放歌曲
  handlePlay = (id, index) => {
    this.props.playAll(id, index)
  }
  render() {
    const { songList } = this.props
    return (
      <Content>
        <SongList>
          <div className="song-top">
            <div className="song-top__all" onClick={() => { this.handlePlay(null, 'all') }}>
              <i className="iconfont">&#xe710;</i>
              <span>全部播放<span className="sum">({songList.length})</span></span>
            </div>
            <div className="song-top__list" onClick={this.handleBatch.bind(this, true)}>
              <i className="iconfont">&#xe610;</i>
            </div>
          </div>
          <SongItem className="song-list">
            <ul className="song-ul">
              {
                songList.map((item, index) => {
                  return (
                    <li key={item + index} className="song-li">
                      <div className="index">{index + 1}</div>
                      <div className="info" onClick={() => { this.handlePlay(item.id, index) }}>
                        <span>{item.name}</span>
                        <span>{item.singer}</span>
                      </div>
                      <div className="more" onClick={this.handleBatch.bind(this, true)}>
                        <i className="iconfont">&#xeb30;</i>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </SongItem>
        </SongList>
      </Content>
    )
  }
}
