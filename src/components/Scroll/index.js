import React, { Component } from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'

import Loading from '../../components/Loading/Loading'
import Loading2 from '../../components/Loading/Loading2'
import { ScrollDiv, PullUpLoading, PullDownLoading } from './style'


class Scroll extends Component {
  constructor(props) {
    super(props)
    this.scrollRef = React.createRef()
  }
  static defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null
  }
  static propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    // 是否启用点击
    click: PropTypes.bool,
    // 是否刷新
    refresh: PropTypes.bool,
    onScroll: PropTypes.func
  };
  componentDidUpdate() {
    // 组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh()
    }
  }
  componentDidMount() {
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollRef.current, {
        scrollX: this.props.direction === "horizontal",
        scrollY: this.props.direction === "vertical",
        // 实时派发scroll事件
        probeType: 3,
        click: this.props.click
      })

      if (this.props.onScroll) {
        this.bScroll.on("scroll", (scroll) => {
          this.props.onScroll(scroll)
        })
      }

    }
  }
  // 销毁
  componentWillUnmount() {
    this.bScroll.off('scroll')
    this.bScroll = null
  }
  // 刷新
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh()
    }
  }
  render() {
    return (
      <ScrollDiv ref={this.scrollRef}>
        {/* 获取子组件 */}
        {this.props.children}
        {/* 滑到底部加载动画 */}
        <PullUpLoading pullUp={this.props.pullUp}>
          <Loading></Loading>
        </PullUpLoading>
        {/* 顶部下拉刷新动画 */}
        <PullDownLoading pullDown={this.props.pullDown}>
          <Loading2></Loading2>
        </PullDownLoading>
      </ScrollDiv>
    );
  }
}

export default Scroll