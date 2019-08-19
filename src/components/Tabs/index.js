import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Tabs } from './style'

export default class index extends Component {
  render() {
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
      <Tabs>
        {
          tabsList.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={item + index}
                className="nav-link"
                activeClassName="nav-link__active"
                activeStyle={{color: this.props.color || '#31C27C'}}>
                {item.name}
              </NavLink>
            )
          })
        }
      </Tabs>
    )
  }
}
