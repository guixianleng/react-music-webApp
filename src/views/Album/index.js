import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import NavBar from '../../components/NavBar'
import Loading from '../../baseUI/Loading/Loading2'
import AlbumDetail from '../album-detail'
import { Container } from './style'
// 专辑详情
import { getAlbumInfo } from "../../api/recommend"
import * as AlbumModel from "../../models/album"

import { CODE_SUCCESS } from "../../api/config"
import { getSongVKey, getSongLyric } from "../../api/song"
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
  // 获取歌曲地址
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
  // 获取歌词 失败（跨域了）
  getSongLyric (mId) {
    getSongLyric(mId).then(res => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          console.log('歌词', res.code)
          // if (res.data.items) {
          //   let item = res.data.items[0]
          //   song.url = `http://dl.stream.qqmusic.qq.com/${item.filename}?vkey=${item.vkey}&guid=3655047200&fromtag=66`
          // }
        }
      }
    })
  }
  // 播放歌曲
  handlePlayAll = (id, key) => {
    if (this.state.songs.length > 0) {
      let songsList = []
      let index = 0
      let currentId = null
      if (key === 'all') {
        songsList = this.state.songs
        currentId = this.state.songs[0].id
        // 显示播放器
        this.props.showMusicPlayer(true)
      } else {
        songsList = [this.state.songs[key]]
        index = key
        currentId = id
      }
      console.log(id, index, currentId)
      //添加播放歌曲列表
      this.props.setSongs(songsList)
      // 设置当前歌曲
      this.props.changeCurrentSong(this.state.songs[index])
      // 设置序号
      this.props.changeCurrentIndex(currentId)
    }
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
          <AlbumDetail songList={this.state.songs} albumInfo={info} playAll={this.handlePlayAll} />
          <Loading show={this.state.loading} bgColor />
        </Container>
      </CSSTransition>
    )
  }
}
