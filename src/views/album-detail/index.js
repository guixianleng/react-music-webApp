import React, { Component, Fragment } from 'react'
import { AlbumImg, Menu } from './style'
import Share from '../../components/Share'
import Detail from '../components/detail'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showShare: false,
      isFavorite: false
    }
  }
  // 分享
  handleShare() {
    this.setState({
      showShare: false
    })
  }
  // 收藏
  handleFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite
    })
  }
  // 播放歌曲
  handlePlay = (key) => {
    this.props.palyAll(key)
  }
  render() {
    const { albumInfo, songList } = this.props
    return (
      <Fragment>
        <Detail info={albumInfo} songs={songList} paly={this.handlePlay.bind(this)}>
          <AlbumImg>
            <div className="img_wrapper">
              <img src={albumInfo.img} alt="" />
              <div className="decorate">{albumInfo.publicTime}</div>
            </div>
            <div className="desc_wrapper">
              <div className="title">{albumInfo.name}</div>
              <div className="person">
                <div className="avatar">
                  <img src={albumInfo.img} alt="" />
                </div>
                <div className="name">{albumInfo.singer}</div>
              </div>
              <div className="brief">
                <span dangerouslySetInnerHTML={{ __html: `简介：${albumInfo.desc}` }}></span>
                <i className="iconfont">&#xe649;</i>
              </div>
            </div>
          </AlbumImg>
          <Menu>
            <div onClick={this.handleFavorite.bind(this)}>
              <i
                className={`iconfont ${this.state.isFavorite ? 'favorite' : ''}`}
                dangerouslySetInnerHTML={{ __html: this.state.isFavorite ? '&#xe60a;' : '&#xe64f;' }}
              >
              </i>
              <span>收藏</span>
            </div>
            <div>
              <i className="iconfont">&#xe61a;</i>
              <span>评论</span>
            </div>
            <div onClick={() => this.setState({ showShare: true })}>
              <i className="iconfont">&#xe632;</i>
              <span>分享</span>
            </div>
          </Menu>
        </Detail>
        <Share
          close={this.handleShare.bind(this)}
          show={this.state.showShare} />
      </Fragment>
    )
  }
}
