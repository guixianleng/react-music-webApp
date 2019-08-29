import React, { Component } from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'

import Loading from '../../components/Loading/Loading'
import { debounce } from '../../utils'
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
    onScroll: null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: () => {},
    pullDown: () => {},
    bounceTop: true,
    bounceBottom: true
  }

  static propTypes = {
    // 开启滚动方式
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    click: PropTypes.bool,
    // 事件派发
    refresh: PropTypes.bool,
    onScroll: PropTypes.func,
    pullUp: PropTypes.func,
    pullDown: PropTypes.func,
    // 开启加载
    pullUpLoading: PropTypes.bool, 
    pullDownLoading: PropTypes.bool,
    // 回弹
    bounceTop: PropTypes.bool,
    bounceBottom: PropTypes.bool
  }

  componentDidUpdate() {
    // 组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh()
    }
  }

  componentDidMount() {
    // Options 参数
    const { direction, click, bounceTop, bounceBottom } = this.props
    // Events 事件
    const { onScroll, pullUp, pullDown } = this.props
    if (this.bScroll) return
    this.bScroll = new BScroll(this.scrollRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      /**
       * 1 滚动的时候会派发scroll事件，会截流
       * 2滚动的时候实时派发scroll事件，不会截流。
       * 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: 3,
      stopPropagation: true,
      // 是否派发click事件
      click: click,
      // 是否启用上下拉效果
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    // 监听滚动事件
    if (!this.bScroll || !onScroll) return
    this.bScroll.on('scroll', (scroll) => {
      this.props.onScroll(scroll)
    })
    this.handleDealUp(pullUp)
    this.handleDealDown(pullDown)
  }
  
  // 处理判断是否滑动到了底部
  handleDealUp (pullUp) {
    if(!this.bScroll || !pullUp) return
    this.bScroll.on('scrollEnd', () => {
      if (this.bScroll.y <= this.bScroll.maxScrollY + 100) {
        debounce(pullUp, 200)()
      }
    })
    return () => {
      this.bScroll.off('scrollEnd')
    }
  }
  // 处理判断用户的下拉动作
  handleDealDown (pullDown) {
    if(!this.bScroll || !pullDown) return
    this.bScroll.on('touchEnd', (pos) => {
      if(pos.y > 50) {
        debounce(pullDown, 200)()
      }
    })
    return () => {
      this.bScroll.off('touchEnd')
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
    const { pullUpLoading, pullDownLoading, children } = this.props
    return (
      <ScrollDiv ref={this.scrollRef} className="scroll-view">
        {children}
        {/* 顶部下拉刷新动画 */}
        <PullDownLoading pullDown={pullDownLoading}>
          <Loading></Loading>
        </PullDownLoading>
        {/* 上滑至底部加载动画 */}
        <PullUpLoading pullUp={pullUpLoading}>
          <Loading></Loading>
        </PullUpLoading>
      </ScrollDiv>
    )
  }
}

export default Scroll
