import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

// import emitter from '../../utils/events'
import Scroll from '../../components/Scroll'
import NavBar from '../../components/NavBar'
import Loading from '../../components/Loading/Loading2'
import AlbumDetail from '../album-detail'
import { Container } from './style'
import bgImg from '../../assets/images/skin_bg.jpg'

import { getAlbumInfo } from "../../api/recommend"
import { getSongVKey } from "../../api/song"
import { CODE_SUCCESS } from "../../api/config"
import * as AlbumModel from "../../models/album"
import * as SongModel from "../../models/song"

export default class Album extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      loading: true,
      album: {},
      songs: []
    }
  }
  componentDidMount() {
    this.setState({
      show: true
    })
    getAlbumInfo(this.props.match.params.id).then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          let album = AlbumModel.createAlbumByDetail(res.data)
          album.desc = res.data.desc
          let songList = res.data.list;
          let songs = [];
          songList.forEach(item => {
            let song = SongModel.createSong(item)
            // 获取歌曲 vkey
            this.getSongUrl(song, item.songmid)
            songs.push(song)
          });
          this.setState({
            loading: false,
            album: album,
            songs: songs
          });
        }
      }
    });
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
  handleScroll = ({ y }) => {
    console.log(y)
  }
  render() {
    return (
      <CSSTransition
        in={this.state.show}
        timeout={300}
        classNames="pop-right"
        appear={true}
        unmountOnExit
        onExited={() => this.props.history.goBack()}
      >
        <Container bgImg={bgImg}>
          <NavBar title="专辑" />
          <Scroll onScroll={(pos) => this.handleScroll(pos)}>
            <div>
              <AlbumDetail songs={this.state.songs} albumInfo={this.state.album} />
            </div>
          </Scroll>
          <Loading show={this.state.loading} />
        </Container>
      </CSSTransition>
    )
  }
}
