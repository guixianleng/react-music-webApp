import React, { Component } from 'react'
import { ListWrapper, Lists, ListItem } from './style'
import LazyLoad from 'react-lazyload'
import * as AlbumModel from '../../models/album'

export default class List extends Component {
  handleDetail (id) {
    this.props.detail(id)
  }
  render() {
    const { ListData } = this.props
    return (
      <ListWrapper>
        <h1 className="title">最新专辑</h1>
        <Lists>
          {
            ListData.map(item => {
              // 通过函数创建专辑对象
              const album = AlbumModel.createAlbumByList(item)
              return (
                <ListItem key={album.mId} onClick={this.handleDetail(album.mId)}>
                  <div className="img_wrapper">
                    <div className="decorate"></div>
                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('../../assets/images/music.png')} alt="music" />}>
                      <img src={album.img + "?param=300x300"} width="100%" height="100%" alt="music"/>
                    </LazyLoad>
                    <div className="decorate-bottom">
                      <i className="iconfont">&#xe710;</i>
                    </div>
                  </div>
                  <div className="desc">{album.name}</div>
                  <div className="desc-singer">{album.singer}</div>
                </ListItem>
              )
            })
          }
        </Lists>
      </ListWrapper>
    )
  }
}
