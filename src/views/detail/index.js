import React, { Component } from 'react'

import Scroll from '../../components/Scroll'
import SongList from '../../components/SongList'
import { Header, Content, Container } from './style'
import Batch from '../../components/Batch'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBatch: false // 显示批量操作
    }
    this.headerRef = React.createRef()
  }
  static defaultProps = {
    info: {},
    songs: []
  }
  handleScroll ({ y }) {
    let detailDOM = this.headerRef.current
    if (y > 0) {
      const transformChange = `scale(${1 + y * 0.004}, ${1 + y * 0.004})`
      detailDOM.style.webkitTransform = transformChange
      detailDOM.style.transform = transformChange
    }
  }
  handleBatch (isShow) {
    this.setState({
      showBatch: isShow
    })
  }
  render() {
    const { songs, info } = this.props
    return (
      <Container>
        <Header bgImg={info.img}>
          <div className="background" ref={this.headerRef}>
            <div className="filter"></div>
          </div>
          {this.props.children}
        </Header>
        <Content className="detail-songs">
          <div className="view-scroll">
            <Scroll onScroll={(pos) => this.handleScroll(pos)}>
              <div>
                <SongList songList={songs} batch={this.handleBatch.bind(this)}></SongList>
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
