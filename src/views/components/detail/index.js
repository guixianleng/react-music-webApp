import React, { Component } from 'react'

import Scroll from '../../../components/Scroll'
import SongList from '../../../components/SongList'
import { Header, Content, Container } from './style'
import Batch from '../../../components/Batch'
import { Tabs, TabsItem } from '../../../baseUI/Tabs'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: '1',
      showBatch: false // 显示批量操作
    }
    this.headerRef = React.createRef()
    this.insertRef = React.createRef()
  }
  static defaultProps = {
    info: {},
    songs: []
  }
  // 滚动操作
  handleScroll ({ y }) {
    let detailDOM = this.headerRef.current
    let insertDOM = this.insertRef.current
    // 滑动样式修改
    if (y > 0) {
      const transformChange = `scale(${1 + y * 0.003}, ${1 + y * 0.003})`
      detailDOM.style.webkitTransform = transformChange
      detailDOM.style.transform = transformChange
    } else {
      detailDOM.style.height = `${300 + y}px`
    }
    // 控制插入的样式
    insertDOM.style.bottom = `${40 - y}px`
  }
  // 批量处理
  handleBatch (isShow) {
    this.setState({
      showBatch: isShow
    })
  }
  // 切换tab
  handleChangeTabs (item) {
    this.setState({
      activeIndex: item.key
    })
  }
  handlePlay (id, index) {
    this.props.playAll(id, index)
  }
  render() {
    const { songs, info, showTabs } = this.props
    return (
      <Container>
        <Header bgImg={info.img}>
          <div className="background" ref={this.headerRef}>
            <div className="filter"></div>
          </div>
          <div className="insert-wrapper" ref={this.insertRef}>
            {this.props.children}
          </div>
        </Header>
        <Content className="detail-songs">
          <div className="view-scroll">
            <Scroll onScroll={(pos) => this.handleScroll(pos)}>
              <div>
                <div style={{display: showTabs ? '' : 'none'}}>
                  <Tabs
                    activeIndex={this.state.activeIndex}
                    onChange={this.handleChangeTabs.bind(this)}
                  >
                    <TabsItem name="单曲" key="1">
                      <SongList
                        songList={songs}
                        batch={this.handleBatch.bind(this)}
                        playAll={this.handlePlay.bind(this)}
                      />
                    </TabsItem>
                    <TabsItem name="详情" key="2">
                      <div
                        className="detail-info"
                        dangerouslySetInnerHTML={{ __html: info.info }}
                      >
                      </div>
                    </TabsItem>
                  </Tabs>
                </div>
                <div style={{display: showTabs ? 'none' : ''}}>
                  <SongList
                    songList={songs}
                    batch={this.handleBatch.bind(this)}
                    playAll={this.handlePlay.bind(this)}
                  />
                </div>
              </div>
            </Scroll>
          </div>
        </Content>
        {/* 批量操作 */}
        <Batch
          close={this.handleBatch.bind(this, false)}
          show={this.state.showBatch} />
      </Container>
    )
  }
}
