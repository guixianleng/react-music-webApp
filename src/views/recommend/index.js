import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { forceCheck } from 'react-lazyload'
import { getCarousel, getNewAlbum } from '../../api/recommend'
import { CODE_SUCCESS } from '../../api/config'

import { Content } from './style'
import Scroll from '../../components/Scroll'
import Slider from '../../components/Slider'
import RecommendList from '../../components/List'
import Loading from '../../components/Loading/Loading2'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      newAlbums: [],
      bannerList: []
    }
  }
  componentDidMount () {
    // 如果当前路由没有被激活隐藏加载组件
    if (!this.props.match.isExact) {
      this.setState({
        loading: false
      })
    }
    // 轮播图
    getCarousel().then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          this.setState({
            loading: false,
            bannerList: res.data.slider
          })
        }
      }
    })
    // 列表
    getNewAlbum().then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          // 根据发布时间降序排列
          let albumList = res.albumlib.data.list;
          albumList.sort((a, b) => {
            return new Date(b.public_time).getTime() - new Date(a.public_time).getTime();
          });
          this.setState({
            loading: false,
            newAlbums: albumList
          })
        }
      }
    })
  }

  handleDetail (id) {
    this.props.history.push({
      pathname: `/recommend/${id}`
    })
  }

  render() {
    const { route } = this.props
    return (
      <Content>
        <Scroll onScroll={() => { forceCheck() }}>
          <div>
            <Slider bannerList={this.state.bannerList} />
            <RecommendList ListData={this.state.newAlbums} detail={this.handleDetail.bind(this)} />
          </div>
        </Scroll>
        <Loading show={this.state.loading}/>
        { renderRoutes(route.routes) }
      </Content>
    )
  }
}
