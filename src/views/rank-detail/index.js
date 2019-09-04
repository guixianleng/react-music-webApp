import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import NavBar from '../../components/NavBar'
import Loading from '../../baseUI/Loading/Loading2'
import Share from '../../components/Share'
import Detail from '../components/detail'
import { Container } from './style'

// 排行榜详情
import { getRankingInfo } from '../../api/ranking'
import * as RankingModel from '../../models/ranking'

import { CODE_SUCCESS } from '../../api/config'
import { getSongVKey } from '../../api/song'
import * as SongModel from '../../models/song'

export default class RankDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      loading: true,
      ranking: {}, // 专辑
      songs: [],
      showMore: false // 右上角事件处理
    }
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  // 排行榜列表
  getRankingInfo() {
    getRankingInfo(this.props.match.params.id).then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          const obj = Object.assign({}, res.topinfo, {
            update_time: res.update_time,
            comment_num: res.comment_num
          })
          let ranking = RankingModel.createRankingByDetail(obj)
          ranking.info = res.topinfo.info
          let songList = []
          res.songlist.forEach(item => {
            if (item.data.pay.payplay === 1) { return }
            let song = SongModel.createSong(item.data)
            // 获取歌曲vkey
            this.getSongUrl(song, item.data.songmid)
            songList.push(song)
          })
          this.setState({
            loading: false,
            ranking: ranking,
            songs: songList
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
  // header事件处理
  handleMore () {
    this.setState({
      showMore: !this.state.showMore
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
    const info = this.state.ranking
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
          this.getRankingInfo()
        }}
        onExited={() => this.props.history.goBack()}
      >
        <Container>
          <NavBar more bgImg={info.img} deal={this.handleMore.bind(this)} />
          <Detail songs={this.state.songs} info={info} showTabs playAll={this.handlePlayAll}>
            <div className="insert-top">
              <h1>{info.title}</h1>
            </div>
            <div className="insert-bottom">
              <div className="update-time">{info.updateTime}更新</div>
              <div className="comment">
                <i className="iconfont">&#xe61a;</i>
                <span>{info.commentNum > 999 ? `999+` : info.commentNum}</span>
              </div>
            </div>
          </Detail>
          <Loading show={this.state.loading} bgColor />
          <Share
            shareTypes={shareTypes}
            close={this.handleMore.bind(this)}
            show={this.state.showMore} />
        </Container>
      </CSSTransition>
    )
  }
}
