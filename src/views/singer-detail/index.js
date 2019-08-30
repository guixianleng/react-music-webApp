import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import NavBar from '../../components/NavBar'
import Loading from '../../components/Loading/Loading2'
import Share from '../../components/Share'
import Detail from '../components/detail'
import { Container } from './style'

// 排行榜详情
import { getSingerInfo } from '../../api/singer'
import { getSongVKey } from '../../api/song'

import { CODE_SUCCESS } from '../../api/config'
import * as SingerModel from '../../models/singer'
import * as SongModel from '../../models/song'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      loading: true,
      singerInfo: {}, // 歌手信息
      songs: [],
      showMore: false, // 右上角事件处理
      followed: false // 是否已关注
    }
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  // 排行榜列表
  getSingerInfo() {
    getSingerInfo(this.props.match.params.id).then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          let singer = SingerModel.createSingerByDetail(res.data)
          singer.desc = res.data.desc
          let songList = res.data.list
          let songs = []
          songList.forEach(item => {
            if (item.musicData.pay.payplay === 1) { return }
            let song = SongModel.createSong(item.musicData)
            // 获取歌曲vkey
            this.getSongUrl(song, song.mId)
            songs.push(song)
          })
          this.setState({
            loading: false,
            singerInfo: singer,
            songs: songs
          })
        }
      }
    })
  }
  // 歌曲地址
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
  componentWillUnmount() {
    this.setState({
      show: false
    })
  }
  handleMore () {
    this.setState({
      showMore: !this.state.showMore
    })
  }
  render() {
    const info = this.state.singerInfo
    const shareTypes = [
      {
        name: '加到歌单',
        iconName: '&#xe605;',
        id: 1
      },
      {
        name: '分享',
        iconName: '&#xe626;',
        id: 2
      }
    ]
    return (
      <CSSTransition
        in={this.state.show}
        timeout={300}
        classNames="pop-right"
        appear={true}
        unmountOnExit
        onEntered={() => {
          // 进入动画结束后获取数据再渲染，避免大数量渲染造成动画卡顿
          this.getSingerInfo()
        }}
        onExited={() => this.props.history.goBack()}
      >
        <Container>
          <NavBar more bgImg={this.state.bgImg} deal={this.handleMore.bind(this)} />
          <Detail songs={this.state.songs} info={info}>
            <div className="info">
              <h1>{info.name}</h1>
              <div className="info-footer">
                <span
                  className={this.state.followed ? 'followed' : ''}
                  onClick={() => { this.setState({ followed: !this.state.followed }) }}
                >
                  {this.state.followed ? '已关注' : '关注'}
                </span>
                <span>个人主页</span>
              </div>
            </div>
          </Detail>
          <Loading show={this.state.loading} bgColor />
          {/* 分享 */}
          <Share
            shareTypes={shareTypes}
            close={this.handleMore.bind(this)}
            show={this.state.showMore} />
        </Container>
      </CSSTransition>
    )
  }
}
