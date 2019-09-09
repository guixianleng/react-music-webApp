import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: ${props => props.theme.bgColor};
  border-bottom: 1px solid ${props => props.theme.borderColor};
`

// 点击切换动画
const animate = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: -100% 50%
  }
  to {
    transform: scaleX(1);
    transform-origin: -100% 50%
  }
`

const ListItem = styled.li`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  height: 46px;
  line-height: 46px;
  color: ${props => props.theme.color};
  text-align: center;
  touch-action: none;
  &.selected {
    color: ${props => props.theme.themeColor};
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      right: 0;
      bottom: 1px;
      height: 2px;
      width: ${props => props.width || '50px'};
      background-color: ${props => props.theme.themeColor};
      animation: ${animate} .3s ease-in-out;
    }
  }
`

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
// 切换内容动画
const ContainerAnimate = keyframes`
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0)
  }
`

const Container = styled.div`
  display: ${props => props.show ? '' : 'none'};
  animation: ${ContainerAnimate} ease-in-out .3s;
`

function Tabs (props)  {  
  const { onChange, activeIndex, children } = props
  // 点击切换
  const handleClick = (item) => {
    onChange(item)
  }
  
  return (
    <Content>
      <TabsItem
        list={children}
        keys={activeIndex}
        onClick={handleClick}
      >
      </TabsItem>
      {
        children.map((item, index) => {
          return (
            <Container show={index === (activeIndex - 1)} key={item + index}>
              {item.props.children}
            </Container>
          )
        })
      }
    </Content>
  )
}

function TabsItem (props) {
  const { list, keys, onClick } = props

  const handleClick = (item) => {
    if (keys === item.key) {
      return false
    }
    onClick(item)
  }

  return (
    <List>
      {
        list.map((item, index) => {
          return (
            <ListItem
              onClick={() => handleClick(item)}
              key={item + index}
              className={index === keys - 1 ? 'selected' : ''}
            >
              {item.props.name}
            </ListItem>
          )
        })
      }
    </List>
  )
}

// 定义字段类型
Tabs.propTypes = {
  activeIndex: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Tabs.defaultProps = {
  activeIndex: '1',
  onChange: () => {}
}

TabsItem.propTypes = {
  // name: PropTypes.string.isRequired
}

export { Tabs, TabsItem }
