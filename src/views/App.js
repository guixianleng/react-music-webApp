import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components' // 换肤

import { renderRoutes } from 'react-router-config'
import router from '../router'
import { AppDiv } from './style'
import Menu from './Menu'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import Plyer from '../connects/player'

import storage from '../utils/storage'
import { setSkinStyle } from '../utils/skin'
import emitter from '../utils/events'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuShow: false, // 显示菜单
      theme: setSkinStyle(storage.getSkin().name, storage.getSkin().color), // 当前皮肤主题
      showPlayer: false // 显示播放器
    }
  }
  // 显示菜单
  handleMenu(show) {
    this.setState({
      menuShow: show
    })
  }
  componentDidMount() {
    // 切换皮肤
    this.eventEmitter = emitter.addListener('triggerTheme', (theme) => {
      this.setState({
        theme
      })
    })
  }
  // 事件销毁
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter)
  }
  handleClosePlayer () {
    this.setState({
      showPlayer: false
    })
  }
  render() {
    return (
      <Fragment>
        <ThemeProvider theme={this.state.theme}>
          <Router>
            <AppDiv>
              <Header
                title="Music webApp"
                menu={this.handleMenu.bind(this)}
              />
              <Tabs color={this.state.theme.themeColor} />
              <div className="app-content">
                <Switch>
                  <Redirect from="/" to="/recommend" exact />
                  { renderRoutes(router) }
                </Switch>
              </div>
            </AppDiv>
            <Menu
              show={this.state.menuShow}
              closeMenu={this.handleMenu.bind(this, false)}
            />
            <Plyer
              show={this.state.showPlayer}
              close={this.handleClosePlayer.bind(this)}
            />
          </Router>
        </ThemeProvider>
      </Fragment>
    )
  }
}

export default App;
