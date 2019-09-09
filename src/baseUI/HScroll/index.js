import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Scroll from '../../components/Scroll'

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 40px;
  font-size: 14px;
  overflow: hidden;
`

const ListItem = styled.li`
  flex: 0 0 auto;
  padding: 0 8px;
  color: inherit;
  text-align: center;
  box-sizing: border-box;
  &.selected {
    color: ${props => props.theme.themeColor}
  }
`

class HScroll extends React.Component{
  constructor (props) {
    super(props)
    this.Category = React.createRef()
  }

  componentDidMount() {
    this.initHScrollWidth()
  }
  
  // 初始化滚动元素总宽度
  initHScrollWidth = () => {
    let categoryDOM = this.Category.current
    let tagElements = categoryDOM.querySelectorAll('li')
    let totalWidth = 0
    Array.from(tagElements).forEach(ele => {
      totalWidth += ele.offsetWidth
    })
    categoryDOM.style.width = `${totalWidth}px`
  }

  static defaultProps = {
    list: [],
    clickTag: null
  }

  static propTypes = {
    list: PropTypes.array,
    clickTag: PropTypes.func
  }

  handleClick (item) {
    this.props.clickTag(item.key)
  }

  render () {
    const { list, currentKey } = this.props
    return (
      <Scroll refresh={true} direction={'horizontal'}>
        <div ref={this.Category}>
          <List>
            {
              list.map(item => {
                return (
                  <ListItem
                    key={item.key}
                    className={currentKey === item.key ? 'selected' : ''}
                    onClick={() => this.handleClick(item)}
                  >
                    {item.name}
                  </ListItem>
                )
              })
            }
          </List>
        </div>
      </Scroll>
    )
  }
}

export default HScroll