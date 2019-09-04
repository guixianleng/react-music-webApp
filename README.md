# React + Redux 简易版QQ音乐webApp

## 项目查看运行：
```shell
$ git clone https://github.com/guixianleng/react-music-webApp.git
$ cd react-music-webApp
$ npm install

$ npm run start 
```
## 功能：
- [x] 推荐
  - [x] 专辑歌曲列表
  - [x] 专辑详情
- [x] 排行榜
  - [x] QQ排行榜
  - [x] 全球榜(假数据)
- [x] 歌手
  - [ ] 列表
  - [ ] 条件搜索
- [x] 搜索功能
  - [ ] 热门搜索
  - [ ] 自定义搜索
- [x] 播放器
  - [x] 迷你播放器
  - [x] 歌曲列表
  - [x] 歌曲播放模式
  - [x] 上一首
  - [x] 下一首
  - [x] 暂停
- [x] 换肤

## 功能演示：
### 1.推荐
![推荐](https://github.com/guixianleng/images-store/blob/master/images/recommend.gif?raw=true)

### 2. 排行榜
![排行榜](https://github.com/guixianleng/images-store/blob/master/images/rank.gif?raw=true)

### 3. 歌手
![歌手](https://github.com/guixianleng/images-store/blob/master/images/singer.gif?raw=true)

### 4. 搜索
![搜索](https://github.com/guixianleng/images-store/blob/master/images/search.gif?raw=true)

### 5. 播放器
![播放器](https://github.com/guixianleng/images-store/blob/master/images/player.gif?raw=true)

### 6. 换肤
![播放器](https://github.com/guixianleng/images-store/blob/master/images/skin.gif?raw=true)

## 功能实现介绍：
### 1. 换肤功能
该项目使用的是`styled-components`样式化组件，可以去[官网](https://www.styled-components.com/docs/basics)了解

优点：
- 可以通过编写实际的CSS代码来设计组件样式，也不需要组件和样式之间的映射，即创建后就是一个正常的React组件，并且可以附加样式给当前组件。 优化react组件解耦.
- 在一个组件内会将结构、样式和逻辑写在一起，有利于组件间的隔离。为了顺应组件化的潮流..
- 使用`styled-components`不需要再使用className属性来控制样式，而是将样式写成更具语义化的组件的形式.
- 使用style-components会随机生成一个class名称，这样不会污染到全局变量.

注意：

引入全局样式引入，需要使用`createGlobalStyle`组件
```js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ...
`
```
然后再将定义的全局样式组件，放在 render() 中最外层元素下面

换肤使用的是`ThemeProvider`组件，[官网](https://www.styled-components.com/docs/advanced#theming)有详细说明.

```js
import { ThemeProvider } from 'styled-components'

render () {
  const theme = {
    backgroundColor: '#317c47',
    color: '#317c47'
  }
  return (
    <ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
  )
}
```

### 2. better-scroll移动端scroll神器

```js
import React, { Component } from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'

import Loading from '../../baseUI/Loading/Loading'
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

```
## 第一次react写项目
感觉学到的东西还是挺多的，慢慢成长，逐渐积累吧！

- 务实自己js、css基础
- react入门成功
- redux的实现原理、组件化开发
- 踩过的坑都是知识的积累

## react学习资源：
- [React.js小书](http://huziketang.mangojuice.top/books/react/)，react/redux介绍的很细
- [Redux中文文档](http://cn.redux.js.org/)
- [React中文文档](https://react.docschina.org/)