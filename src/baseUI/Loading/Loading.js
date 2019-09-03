import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const Dance = keyframes`
  0%, 40%, 100%{
    transform: scaleY(0.4);
    transform-origin: center 100%;
  }
  20%{
    transform: scaleY(1.2);
  }
`;

const LoadingDiv = styled.div`
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  margin: auto;
  text-align: center;
  font-size: 10px;
  display: ${props => props.show ? '' : 'none'};
  > div {
    display: inline-block;
    background-color: ${props => props.theme.color};
    height: 100%;
    width: 2px;
    margin-right: 4px;
    animation: ${Dance} 1s infinite;
    animation-play-state: ${props => props.playStatus ? 'running' : 'paused'};
    &:nth-child(2) {
      animation-delay: -0.4s;
    }
    &:nth-child(3) {
      animation-delay: -0.6s;
    }
    &:nth-child(4) {
      animation-delay: -0.5s;
    }
    &:nth-child(5) {
      animation-delay: -0.2s;
    }
  }
`

const Loading = (props) => {
  const { show, title, height, playStatus, width } = props
  return (
    <LoadingDiv
      show={show}
      height={height}
      playStatus={playStatus}
      width={width}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>{title}</span>
    </LoadingDiv>
  )
}

Loading.defaultProps = {
  title: '',
  show: true,
  height: 10,
  width: 60,
  // 动画播放状态
  playStatus: true
}

Loading.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  height: PropTypes.number,
  playStatus: PropTypes.bool,
  width: PropTypes.number
}

export default Loading
