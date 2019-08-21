import React, { Component } from 'react'
import { SongList, SongItem } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: {
        position: 'static',
        top: '0px'
      }
    }
  }
  static defaultProps = {
    songList: []
  }
  render() {
    const { songList } = this.props
    return (
      <SongList>
        <div className="first_line">
          <div className="play_all">
            <i className="iconfont">&#xe710;</i>
            <span>播放全部<span className="sum">({songList.length})</span></span>
          </div>
          <div className="add_list">
            <i className="iconfont">&#xe610;</i>
          </div>
        </div>
        <SongItem>
          {
            songList.map((item, index) => {
              return (
                <li key={item + index}>
                  <div className="index">{index + 1}</div>
                  <div className="info">
                    <span>{item.name}</span>
                    <span>{item.singer}</span>
                  </div>
                  <div className="more">
                    <i className="iconfont">&#xeb30;</i>
                  </div>
                </li>
              )
            })
          }
        </SongItem>
      </SongList>
    )
  }
}
