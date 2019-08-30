import React, { Component } from 'react'

import { getHotKey, search } from '../../api/search'
import { CODE_SUCCESS } from '../../api/config'
// import * as SingerModel from '../../models/singer'
// import * as AlbumModel from '../../models/album'
import * as SongModel from '../../models/song'

import Scroll from '../../components/Scroll'
import { Container, NavSearch, Hot, HistoryContent, History, HistoryItem, ResultContent, ResultList, ResultItem } from './style'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      results: [], // 搜索结果
      hotList: [], // 热门搜索
      searchList: []
    }
  }
  // 输入框变化
  handleInput = (e) => {
    let value = e.currentTarget.value
    this.setState({
      inputValue: value
    })
    this.searchKey(value)
  }
  componentDidMount() {
    this.getHotList()
    this.setState({
      searchList: this.props.historyList
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

  searchKey (keywords) {
    search(keywords).then((res) => {
      if (res) {
        console.log(res)
        if (res.code === CODE_SUCCESS) {
          let dataList = []
          res.data.song.list.forEach((data) => {
            if (data.pay.payplay === 1) { return }
            dataList.push(SongModel.createSong(data))
          })
          this.setState({
            results: dataList
          })
        }
      }
    })
  }

  // 搜索
  handleSearch(keyword) {
    this.setState({
      inputValue: keyword
    })
    this.searchKey(keyword)
    this.cookieHistory(keyword)
  }

  // 缓存历史搜索
  cookieHistory (key) {
    let index = this.state.searchList.findIndex(item => item === key)
    if (index === -1) {
      this.state.searchList.unshift(key)
    }
    this.props.setHistory(key)
  }

  // 删除历史记录
  handleDeleteHistory = (key) => {
    if (key !== 'all') {
      this.state.searchList.splice(key, 1)
      this.props.setHistory(this.state.searchList, 'replace')
      this.setState({
        searchList: this.state.searchList
      })
    } else {
      this.props.setHistory([], 'replace')
      this.setState({
        searchList: []
      })
    }
  }
  render() {
    return (
      <Container>
        <Scroll>
          <div>
            <NavSearch className="search-box">
              <input type="text" className="search-input" placeholder="搜索音乐、视频、歌单、歌手、用户"
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
                style={{display: this.state.inputValue.length ? '' : 'none'}}
                onClick={() => this.setState({ inputValue: '', results: [] })}
              >取消</div>
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
            <HistoryContent show={this.state.searchList.length === 0}>
              <div className="top">
                <span>搜索历史</span>
                <span onClick={() => { this.handleDeleteHistory('all') }}>清除历史</span>
              </div>
              <History>
                {
                  this.state.searchList.map((item, index) => {
                    return (
                      <HistoryItem key={index}>
                        <span onClick={() => { this.handleSearch(item) }}>{item}</span>
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
        <ResultContent className="result-content" show={this.state.inputValue.length}>
          <Scroll>
            <div>
              <ResultList>
                {
                  this.state.results.map((item, index) => {
                    if (index > 9) return ''
                    return (
                      <ResultItem key={item + index}>
                        <i className="iconfont">&#xe604;</i>
                        <span dangerouslySetInnerHTML={{ __html: item.hLight }}>
                        </span>
                      </ResultItem>
                    )
                  })
                }
              </ResultList>
            </div>
          </Scroll>
        </ResultContent>
      </Container>
    )
  }
}
