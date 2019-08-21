import React from 'react'
import styled, { keyframes } from 'styled-components'

const Dance = keyframes`
  0%, 40%, 100%{
    transform: scaleY(0.6);
    transform-origin: center 100%;
  }
  20%{
    transform: scaleY(1.6);
  }
`;
const LoadingDiv = styled.div`
  display: ${props => props.show ? '' : 'none'};
  height: 10px;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 10px;
  > div {
    display: inline-block;
    background-color: ${props => props.color || '#D43C33'};
    height: 100%;
    width: 2px;
    margin-right: 4px;
    animation: ${Dance} 1s infinite;
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
  return (
    <LoadingDiv color={props.themeColor} show={props.show}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>{props.title}</span>
    </LoadingDiv>
  )
}

export default Loading
