import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components' // 换肤

// import { renderRoutes } from 'react-router-config'
// import router from '../router'
import { AppDiv } from './AppDiv'
import Menu from './Menu'
import Header from '../components/Header'
import Tabs from '../components/Tabs'

import '../assets/styles/reset.css'
import '../assets/styles/font.css'
import storage from '../utils/storage'
import { skins, setSkinStyle } from '../utils/skin'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuShow: false,
      theme: setSkinStyle(skins[storage.getSkin()])
    }
  }
  // 显示菜单
  handleMenu(show) {
    this.setState({
      menuShow: show
    })
  }

  handleTheme (themeObj) {
    this.setState({
      theme: themeObj
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
              <Tabs 
                color={this.state.theme.color}
              />
              {/* <Switch>
                <Redirect from="/" to="/recommend" exact /> */}
              {/* 渲染 Route */}
              {/* { renderRoutes(router) }
              </Switch> */}
              <Menu
                show={this.state.menuShow}
                triggerTheme={this.handleTheme.bind(this)}
                closeMenu={this.handleMenu.bind(this, false)}
              />
            </AppDiv>
          </Router>
        </ThemeProvider>
      </Fragment>
    )
  }
}

export default App;
