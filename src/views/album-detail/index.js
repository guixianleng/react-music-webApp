import React, { Component, Fragment } from 'react'
import SongList from '../../components/SongList'
import { AlbumImg, Menu } from './style'
import Share from '../../components/Share'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showShare: false,
      isFavorite: false
    }
  }
  // 分享
  handleShare () {
    this.setState({
      showShare: false
    })
  }
  // 收藏
  handleFavorite () {
    this.setState({
      isFavorite: !this.state.isFavorite
    })
  }
  render() {
    const { albumInfo } = this.props
    return (
      <Fragment>
        <AlbumImg background={albumInfo.img}>
          <div className="background">
            <div className="filter"></div>
          </div>
          <div className="img_wrapper">
            <img src={albumInfo.img} alt="" />
            <div className="decorate">2019-08-21</div>
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
              <span dangerouslySetInnerHTML={{__html: `简介：${albumInfo.desc}`}}></span>
              <i className="iconfont">&#xe649;</i>
            </div>
          </div>
        </AlbumImg>
        <Menu>
          <div>
            <i
              className={`iconfont ${this.state.isFavorite ? 'favorite' : ''}`}
              onClick={this.handleFavorite.bind(this)}
              dangerouslySetInnerHTML={{__html: this.state.isFavorite ? '&#xe60a;' : '&#xe64f;'}}
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
        <SongList songList={this.props.songs}></SongList>
        <Share
          close={this.handleShare.bind(this)}
          show={this.state.showShare} />
      </Fragment>
    )
  }
}
