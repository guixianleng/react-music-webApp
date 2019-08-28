import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import NavBar from '../../components/NavBar'
import Loading from '../../components/Loading/Loading2'
import AlbumDetail from '../album-detail'
import { Container } from './style'
// 专辑详情
import { getAlbumInfo } from "../../api/recommend"
import * as AlbumModel from "../../models/album"

import { CODE_SUCCESS } from "../../api/config"
import { getSongVKey } from "../../api/song"
import * as SongModel from "../../models/song"


export default class Album extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      loading: true,
      album: {}, // 专辑
      songs: []
    }
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  // 专辑列表
  getAlbumInfo () {
    getAlbumInfo(this.props.match.params.id).then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          console.log(res.data)
          let album = AlbumModel.createAlbumByDetail(res.data)
          album.desc = res.data.desc
          let songList = res.data.list
          let songs = []
          songList.forEach(item => {
            let song = SongModel.createSong(item)
            // 获取歌曲 vkey
            this.getSongUrl(song, item.songmid)
            songs.push(song)
          })
          this.setState({
            loading: false,
            album: album,
            songs: songs
          })
        }
      }
    })
  }
  componentWillUnmount() {
    this.setState({
      show: false
    })
  }
  getSongUrl(song, mId) {
    getSongVKey(mId).then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          if (res.data.items) {
            let item = res.data.items[0]
            song.url = `http://dl.stream.qqmusic.qq.com/${item.filename}?vkey=${item.vkey}&guid=3655047200&fromtag=66`
          }
        }
      }
    })
  }
  render() {
    const info = this.state.album
    return (
      <CSSTransition
        in={this.state.show}
        timeout={300}
        classNames="pop-right"
        appear={true}
        unmountOnExit
        onEntered={() => {
          this.getAlbumInfo()
        }}
        onExited={() => this.props.history.goBack()}
      >
        <Container>
          <NavBar title={info.name} bgImg={info.img} />
          <AlbumDetail songList={this.state.songs} albumInfo={info} />
          <Loading show={this.state.loading} bgColor />
        </Container>
      </CSSTransition>
    )
  }
}
