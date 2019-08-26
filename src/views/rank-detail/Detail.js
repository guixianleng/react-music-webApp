import React, { Component } from 'react'

import Scroll from '../../components/Scroll'
import SongList from '../../components/SongList'
import { Header, Content, Container } from './detailStyle'
import Share from '../../components/Share'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showShare: false
    }
    this.headerRef = React.createRef()
  }
  static defaultProps = {
    info: {},
    songs: []
  }
  // 分享
  handleShare() {
    this.setState({
      showShare: false
    })
  }
  handleScroll ({ y }) {
    let detailDOM = this.headerRef.current
    if (y > 0) {
      const transformChange = `scale(${1 + y * 0.004}, ${1 + y * 0.004})`
      detailDOM.style.webkitTransform = transformChange
      detailDOM.style.transform = transformChange
    }
  }
  render() {
    const { songs, info } = this.props
    return (
      <Container>
        <Header bgImg={info.img}>
          <div className="background" ref={this.headerRef}>
            <div className="filter">
              <h1>巅峰榜</h1>
              <div>热歌</div>
            </div>
          </div>
          <div className="ranking-info">
            <div className="update-time">{info.updateTime}更新</div>
            <div className="comment">
              <i className="iconfont">&#xe61a;</i>
              <span>{info.commentNum > 999 ? `999+` : info.commentNum}</span>
            </div>
          </div>
        </Header>
        <Content className="detail-songs">
          <div className="view-scroll">
            <Scroll onScroll={(pos) => this.handleScroll(pos)}>
              <div>
                <SongList songList={songs}></SongList>
              </div>
            </Scroll>
          </div>
        </Content>
        <Share
          close={this.handleShare.bind(this)}
          show={this.state.showShare} />
      </Container>
    )
  }
}
