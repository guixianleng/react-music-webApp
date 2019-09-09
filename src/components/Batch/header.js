import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: ${props => props.theme.color};
  font-size: 16px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 15px;
  z-index: 100;
  background-color: ${props => props.theme.bgColor};
`

const Header = (props) => {
  const { selectAll, title, close} = props
  return (
    <Container>
      <div className="select-all" onClick={selectAll}>
        全选
      </div>
      <div className="title">
        {title}
      </div>
      <div className="close" onClick={close}>
        关闭
      </div>
    </Container>
  )
}

Header.defaultProps = {
  selectAll: () => {},
  title: '批量操作',
  close: () => {}
}

Header.propTypes = {
  selectAll: PropTypes.func,
  title: PropTypes.string,
  close: PropTypes.func
}

export default Header
