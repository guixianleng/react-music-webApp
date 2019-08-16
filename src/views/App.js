import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom"
// import { renderRoutes } from "react-router-config"

// import router from "../router"

import logo from "../assets/images/logo.png"
import "../assets/styles/reset.css"
import "../assets/styles/font.css"
import './App.less'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuShow: false
    }
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
      <Router>
        <div className="app">
          <header className="app-header">
            <i className="icon-et-more app-more" onClick={() => { this.setState({ menuShow: true }); }}></i>
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Mango Music</h1>
          </header>
          <div className="app-tab">
            {
              tabsList.map((item, index) => {
                return (
                  <div className="app-tab__item" key={item + index}>
                    <NavLink
                      to={item.path}
                      className="nav-link"
                      activeClassName="nav-link__active"
                      activeStyle={{color: '#31C27C'}}>
                      <span>{item.name}</span>
                    </NavLink>
                  </div>
                )
              })
            }
          </div>
          {/* <Switch>
            <Redirect from="/" to="/recommend" exact /> */}
            {/* 渲染 Route */}
            {/* { renderRoutes(router) }
          </Switch> */}
        </div>
      </Router>
    )
  }
}

export default App;
