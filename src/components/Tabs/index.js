import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { Tab } from './style'

export default class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {  }
  }
  static propTypes = {
    color: PropTypes.string.isRequired
  }
  static defaultProps = {
    color: '#31C27C'
  }
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
      <Tab>
        {
          tabsList.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={item + index}
                className="nav-link"
                activeClassName="nav-link__active"
                activeStyle={{color: this.props.color}}>
                {item.name}
              </NavLink>
            )
          })
        }
      </Tab>
    )
  }
}
