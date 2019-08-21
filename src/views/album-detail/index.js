import React, { Component, Fragment } from 'react'
import SongList from '../../components/SongList'
import { AlbumImg, Menu } from './style'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
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
            <i className="iconfont">&#xe64f;</i>
            <span>收藏</span>
          </div>
          <div>
            <i className="iconfont">&#xe61a;</i>
            <span>评论</span>
          </div>
          <div>
            <i className="iconfont">&#xe632;</i>
            <span>分享</span>
          </div>
        </Menu>
        <SongList songList={this.props.songs}></SongList>
      </Fragment>
    )
  }
}
