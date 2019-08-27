import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import NavBar from '../../components/NavBar'
import Loading from '../../components/Loading/Loading2'
import Detail from '../detail'
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
      bgImg: ''
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
  handleScroll = ({ y }) => {
    // if (y < -20) {
    //   this.setState({
    //     bgImg: this.state.ranking.img
    //   })
    // } else {
    //   this.setState({
    //     bgImg: ''
    //   })
    // }
    if (y > 0) {
      const transformChange = `scale(${1 + y * 0.004}, ${1 + y * 0.004})`
      let detailDOM = this.detailRef.current.headerRef.current
      detailDOM.style.webkitTransform = transformChange
      detailDOM.style.transform = transformChange
    }
  }
  componentWillUnmount() {
    this.setState({
      show: false
    })
  }
  render() {
    const info = this.state.ranking
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
          <NavBar more bgImg={this.state.bgImg} />
          <Detail songs={this.state.songs} info={info}>
            <div className="insert-bg">
              <div className="insert-top">
                <h1>巅峰榜</h1>
                <div>热歌</div>
              </div>
              <div className="insert-bottom">
                <div className="update-time">{info.updateTime}更新</div>
                <div className="comment">
                  <i className="iconfont">&#xe61a;</i>
                  <span>{info.commentNum > 999 ? `999+` : info.commentNum}</span>
                </div>
              </div>
            </div>
          </Detail>
          <Loading show={this.state.loading} bgColor />
        </Container>
      </CSSTransition>
    )
  }
}
