import React, { Component, Fragment } from 'react'
import { forceCheck } from 'react-lazyload'
import { renderRoutes } from 'react-router-config'

import Scroll from '../../components/Scroll'
import Loading from '../../baseUI/Loading/Loading2'
import { Container, List, ListItem, RankList } from './style'
import { transNumber } from '../../utils/decimal'

import { getRankingList } from '../../api/ranking'
import { CODE_SUCCESS } from '../../api/config'
import * as RankingModel from '../../models/ranking'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      pullDownLoading: false,
      rankingList: []
    }
  }
  componentDidMount() {
    // 获取排行榜
    getRankingList().then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          let topList = []
          res.data.topList.forEach(item => {
            if (/MV/i.test(item.topTitle)) {
              return
            }
            item.listenCount = transNumber(item.listenCount)
            topList.push(RankingModel.createRankingByList(item))
          })
          this.setState({
            loading: false,
            rankingList: topList
          })
        }
      }
    })
  }
  // 详情页
  handleDetail(url) {
    return () => {
      this.props.history.push({
        pathname: url
      })
    }
  }
  handlePullDown = () => {
    console.log('下拉')
    this.setState({
      pullDownLoading: true
    })
  }
  render() {
    const { match, route } = this.props
    return (
      <Container show={this.state.loading}>
        <Scroll
          onScroll={() => { forceCheck() }}
          pullDown={() => this.handlePullDown()}
          pullDownLoading={this.state.pullDownLoading}
        >
          <div>
            <Fragment>
              <h2>QQ音乐巅峰榜</h2>
              <List className="rank-ul" global={false}>
                {
                  this.state.rankingList.map(item => {
                    return (
                      <ListItem
                        key={item.id}
                        className="rank-li"
                        trick={false}
                        onClick={this.handleDetail(`${match.url}/${item.id}`)}
                      >
                        <div className="rank-li_img">
                          <img src={item.img} width="100%" height="100%" alt="ranking" />
                          <div className="decorate">
                            <div className="decorate-left">
                              <i className="iconfont">&#xe721;</i>
                              <span>{item.listenCount}</span>
                            </div>
                            <div className="decorate-bottom">
                              <i className="iconfont">&#xe62c;</i>
                            </div>
                          </div>
                        </div>
                        <RankList className="ranking-list">
                          {
                            item.songs.map((song, index) => {
                              return (
                                <div key={index}>
                                  <span className="index">{index + 1}</span>
                                  <span>{song.name}</span>
                                  &nbsp;-&nbsp;
                                  <span>{song.singer}</span>
                                </div>
                              )
                            })
                          }
                        </RankList>
                        <div className="ranking-detail">
                          <i className="iconfont">&#xe649;</i>
                        </div>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Fragment>
            <Fragment>
              <h2>全球榜</h2>
              <List className="rank-ul" global>
                {
                  this.state.rankingList.map(item => {
                    return (
                      <ListItem key={item.id} className="rank-li" trick>
                        <div className="rank-li_img">
                          <img src={item.img} width="100%" height="100%" alt="ranking" />
                          <div className="decorate">
                            <div className="decorate-left">
                              <i className="iconfont">&#xe721;</i>
                              <span>{item.listenCount}</span>
                            </div>
                            <div className="decorate-bottom">
                              <i className="iconfont">&#xe62c;</i>
                            </div>
                          </div>
                          <div className="type-title">
                            {item.title}
                          </div>
                        </div>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Fragment>
          </div>
        </Scroll>
        <Loading show={this.state.loading} />
        {renderRoutes(route.routes)}
      </Container>
    )
  }
}
