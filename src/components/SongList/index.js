import React, { Component, Fragment } from 'react'
import { SongList, SongItem } from './style'
import Batch from '../../components/Batch'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBatch: false
    }
  }
  static defaultProps = {
    songList: []
  }
  // 批量操作
  handleBatch (pos) {
    this.setState({
      showBatch: pos
    })
  }
  render() {
    const { songList } = this.props
    return (
      <Fragment>
        <SongList>
          <div className="first_line">
            <div className="play_all">
              <i className="iconfont">&#xe710;</i>
              <span>全部播放<span className="sum">({songList.length})</span></span>
            </div>
            <div className="add_list" onClick={this.handleBatch.bind(this, true)}>
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
        {/* 批量操作 */}
        <Batch
          close={this.handleBatch.bind(this, false)}
          show={this.state.showBatch} />
      </Fragment>
    )
  }
}
