import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'

// import router from '../router'
import { AppDiv } from './AppDiv'
import Menu from './Menu'

import logo from '../assets/images/logo.png'
import '../assets/styles/reset.css'
import '../assets/styles/font.css'
// 引入全局样式
import { GlobalStyle } from '../assets/styles/style';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuShow: false,
      activeIndex: 0 // 激活第几个tab
    }
  }
  // 显示菜单
  handleMenu (show) {
    this.setState({
      menuShow: show
    })
  }
  
  render () {
    const tabsList = [
      {
        name: '推荐',
        path: '/recommend'
      },
      {
        name: '排行榜',
        path: '/ranking'
      },
      {
        name: '歌手',
        path: '/singer'
      },
      {
        name: '搜索',
        path: '/search'
      }
    ]
    return (
      <Fragment>
        <Router>
          <AppDiv>
            <header className="app-header">
              <i
                className="icon-et-more app-more"
                onClick={this.handleMenu.bind(this, true)}>
              </i>
              <img src={logo} className="app-logo" alt="logo" />
              <h1 className="app-title">React Music webApp</h1>
            </header>
            <div className="app-tab">
              {
                tabsList.map((item, index) => {
                  return (
                    <NavLink
                      to={item.path}
                      key={item + index}
                      className="nav-link"
                      activeClassName="nav-link__active"
                      activeStyle={{color: '#31C27C'}}>
                      {item.name}
                    </NavLink>
                  )
                })
              }
            </div>
            {/* <Switch>
              <Redirect from="/" to="/recommend" exact /> */}
              {/* 渲染 Route */}
              {/* { renderRoutes(router) }
            </Switch> */}
            <Menu
              show={this.state.menuShow}
              closeMenu={this.handleMenu.bind(this, false)}
            />
          </AppDiv>
        </Router>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App;
