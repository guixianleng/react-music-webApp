import React, { Component } from 'react'

import { getHotKey } from '../../api/search'
import { CODE_SUCCESS } from '../../api/config'

import Scroll from '../../components/Scroll'
import { Container, NavSearch, Hot, HistoryContent, History, HistoryItem } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      singers: [], // 歌手
      albums: [], // 专辑
      songs: [], // 歌曲
      hotList: [], // 热门搜索
      historys: []
    }
  }
  handleInput = (e) => {
    let value = e.currentTarget.value
    this.setState({
      inputValue: value
    })
  }
  componentDidMount() {
    this.getHotList()
    this.setState({
      historys: this.props.historyList
    })
  }
  // 热门搜索列表
  getHotList() {
    getHotKey().then((res) => {
      if (res) {
        if (res.code === CODE_SUCCESS) {
          this.setState({
            hotList: res.data.hotkey
          })
        }
      }
    })
  }
  // 搜索
  handleSearch(key) {
    this.state.historys.push(key)
    this.props.setHistory(key)
  }
  // 删除历史记录
  handleDeleteHistory = (key) => {
    if (key !== 'all') {
      this.state.historys.splice(key, 1)
      this.props.setHistory(this.state.historys, 'replace')
      this.setState({
        historys: this.state.historys
      })
    } else {
      this.props.setHistory([], 'replace')
      this.setState({
        historys: []
      })
    }
  }
  render() {
    return (
      <Container>
        <Scroll>
          <div>
            <NavSearch className="search-box">
              <input type="text" className="search-input" placeholder="搜索歌曲、歌手、专辑"
                value={this.state.inputValue}
                onChange={this.handleInput}
                onKeyDown={
                  (e) => {
                    if (e.keyCode === 13) {
                      this.handleSearch(e.currentTarget.value)
                    }
                  }
                } />
              <div
                className="search-button"
                onClick={() => this.setState({ inputValue: '', singers: [], albums: [], songs: [] })}
              >
                取消
          </div>
            </NavSearch>
            <Hot className="search-hot">
              <h1 className="title">热门搜索</h1>
              <div className="hot-list">
                {
                  this.state.hotList.map((hot, index) => {
                    if (index > 7) return ''
                    return (
                      <div className="hot-item" key={index} onClick={() => { this.handleSearch(hot.k) }}>
                        {hot.k}
                      </div>
                    )
                  })
                }
              </div>
            </Hot>
            <HistoryContent show={this.state.historys.length === 0}>
              <div className="top">
                <span>搜索历史</span>
                <span onClick={() => { this.handleDeleteHistory('all') }}>清除历史</span>
              </div>
              <History>
                {
                  this.state.historys.map((item, index) => {
                    return (
                      <HistoryItem key={index}>
                        <span>{item}</span>
                        <i className="iconfont" onClick={() => { this.handleDeleteHistory(index) }}>
                          &#xe603;
                        </i>
                      </HistoryItem>
                    )
                  })
                }
              </History>
            </HistoryContent>
          </div>
        </Scroll>
      </Container>
    )
  }
}
