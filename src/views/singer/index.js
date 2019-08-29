import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import LazyLoad, { forceCheck } from 'react-lazyload'

import Scroll from '../../components/Scroll'
import HScroll from '../../baseUI/HScroll'
import Loading from '../../components/Loading/Loading2'

import { getSingerList } from '../../api/singer'
import { CODE_SUCCESS } from '../../api/config'
import * as SingerModel from '../../models/singer'

import { Container, ContentLabels, Labels, LabelsItem, NavContainer } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      typeKey: 'all_all',
      labelKey: 'all',
      areaKey: 'all',
      sexyKey: 'all',
      singers: [],
      opacity: 1
    }
    this.timer = null
    // 分类
    this.singerTypes = [
      { key: 'all_all', name: '全部' },
      { key: 'cn_man', name: '华语男' },
      { key: 'cn_woman', name: '华语女' },
      { key: 'cn_team', name: '华语组合' },
      { key: 'k_man', name: '韩国男' },
      { key: 'k_woman', name: '韩国女' },
      { key: 'k_team', name: '韩国组合' },
      { key: 'j_man', name: '日本男' },
      { key: 'j_woman', name: '日本女' },
      { key: 'j_team', name: '日本组合' },
      { key: 'eu_man', name: '欧美男' },
      { key: 'eu_woman', name: '欧美女' },
      { key: 'eu_team', name: '欧美组合' },
      { key: 'other_other', name: '其它' }
    ]
    // 区域
    this.areaTypes = [
      { key: 'all', name: '全部' },
      { key: 'cn', name: '内地' },
      { key: 'ht', name: '港台' },
      { key: 'eu', name: '欧美' },
      { key: 'j', name: '日本' },
      { key: 'k', name: '韩国' },
      { key: 'other_other', name: '其它' }
    ]
    // 性别
    this.sexyTypes = [
      { key: 'all', name: '全部' },
      { key: 'man', name: '男' },
      { key: 'woman', name: '女' },
      { key: 'team', name: '组合' },
    ]
    // 标签
    this.labels = [
      { key: 'all', name: '热' },
      { key: 'A', name: 'A' },
      { key: 'B', name: 'B' },
      { key: 'C', name: 'C' },
      { key: 'D', name: 'D' },
      { key: 'E', name: 'E' },
      { key: 'F', name: 'F' },
      { key: 'G', name: 'G' },
      { key: 'H', name: 'H' },
      { key: 'I', name: 'I' },
      { key: 'J', name: 'J' },
      { key: 'K', name: 'K' },
      { key: 'L', name: 'L' },
      { key: 'M', name: 'M' },
      { key: 'N', name: 'N' },
      { key: 'O', name: 'O' },
      { key: 'P', name: 'P' },
      { key: 'Q', name: 'Q' },
      { key: 'R', name: 'R' },
      { key: 'S', name: 'S' },
      { key: 'T', name: 'T' },
      { key: 'U', name: 'U' },
      { key: 'V', name: 'V' },
      { key: 'W', name: 'W' },
      { key: 'X', name: 'X' },
      { key: 'Y', name: 'Y' },
      { key: 'Z', name: 'Z' }
    ]
  }
  componentDidMount() {
    this.getSingers()
  }
  getSingers() {
    // const key = `${this.state.areaKey + '_' + this.state.sexyKey + '_' + this.state.labelKey}`
    const key = `${this.state.typeKey + '_' + this.state.labelKey}`
    console.log(key, 111)
    getSingerList(1, key).then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          let singersList = []
          res.data.list.forEach(data => {
            let singer = new SingerModel.Singer(data.Fsinger_id, data.Fsinger_mid, data.Fsinger_name,
              `https://y.gtimg.cn/music/photo_new/T001R150x150M000${data.Fsinger_mid}.jpg?max_age=2592000`);
              singersList.push(singer)
          })
          this.setState({
            loading: false,
            singers: singersList
          })
        }
      }
    })
  }
  // 筛选类别
  handleType (key) {
    this.setState({
      loading: true,
      typeKey: key,
      labelKey: 'all',
      singers: []
    }, () => {
      this.getSingers()
    })
  }
  // 筛选字母
  handleLabel (key) {
    this.setState({
      loading: true,
      labelKey: key,
      singers: []
    }, () => {
      this.getSingers()
    })
  }
  // 筛选地区
  handleArea (key) {
    // this.setState({
    //   loading: true,
    //   areaKey: key,
    //   singers: []
    // }, () => {
    //   this.getSingers()
    // })
    this.setState({
      areaKey: key
    })
  }
  // 筛选性别
  handleSexy (key) {
    // this.setState({
    //   loading: true,
    //   sexyKey: key,
    //   singers: []
    // }, () => {
    //   this.getSingers()
    // })
    this.setState({
      sexyKey: key
    })
  }
  toDetail = (url) => {
    this.props.history.push({
      pathname: url
    })
  }
  handleShowLetter () {
    if (this.timer) {
      this.setState({
        opacity: 1
      })
      clearInterval(this.timer)
      // return false
    }
    this.timer = setTimeout(() => {
      this.setState({
        opacity: 0
      })
    }, 1000)
  }
  handleScroll ({ y }) {
    forceCheck()
    // this.handleShowLetter()
  }
  render() {
    const { match, route } = this.props
    const singersList = this.state.singers.map(singer => {
      return (
        <div
          className="singer-wrapper"
          key={singer.id}
          onClick={() => { this.toDetail(`${match.url + '/' + singer.mId}`) }}>
          <div className="singer-img">
            <LazyLoad
              placeholder={<img width="100%" height="100%" src={require('../../assets/images/user.png')} alt="music" />}
              height={50}>
              <img src={singer.img} width="100%" height="100%" alt="singer" />
            </LazyLoad>
          </div>
          <div className="singer-name">
            <div>{singer.name}</div>
            <i className="iconfont">&#xe649;</i>
          </div>
        </div>
      )
    })
    return (
      <Container>
        <NavContainer>
          <HScroll
            list={this.singerTypes}
            currentKey={this.state.typeKey}
            clickTag={this.handleType.bind(this)}
          />
          <HScroll
            list={this.areaTypes}
            currentKey={this.state.areaKey}
            clickTag={this.handleArea.bind(this)}
          />
          <HScroll
            list={this.sexyTypes}
            currentKey={this.state.sexyKey}
            clickTag={this.handleSexy.bind(this)}
          />
        </NavContainer>
        <ContentLabels opacity={this.state.opacity}>
          <Labels>
            {
              this.labels.map(item => {
                return (
                  <LabelsItem
                    key={item.key}
                    className={this.state.labelKey === item.key ? 'selected' : ''}
                    onClick={this.handleLabel.bind(this, item.key)}
                  >
                    {item.name}
                  </LabelsItem>
                )
              })
            }
          </Labels>
        </ContentLabels>
        <div className="singer-list">
          <Scroll onScroll={(pos) => this.handleScroll(pos)} refresh={true}>
            <div>
              {singersList}
            </div>
          </Scroll>
        </div>
        <Loading show={this.state.loading} />
        {renderRoutes(route.routes)}
      </Container>
    )
  }
}
