import React from 'react'
import styled, { keyframes } from 'styled-components'

const ScaledOut = keyframes`
  0%,
  100% {
    transform: translate3d(-50%, -50%, 0) scale3d(4, 4, 4);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) scale3d(3, 3, 3);
  }
`

const ScaledInner = keyframes`
  0%,
  100% {
    transform: translate3d(-50%, -50%, 0) scale3d(0.5, 0.5, 0.5);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1.3);
  }
`

const LoadingDiv = styled.div`
  display: ${props => props.show ? '' : 'none'};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.bgColor ? '#fff' : 'transparent'};
  z-index: 9999;
  div {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #E08A84;
    border-radius: 50%;
    animation: ${ScaledOut} .9s ease-in-out infinite;
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #D96057;
      transform-origin: center;
      animation: ${ScaledInner} .9s ease-in-out infinite
    }
  }
`;

const Loading2 = (props) => {
  return (
    <LoadingDiv show={props.show} bgColor={props.bgColor}>
      <div></div>
    </LoadingDiv>
  )
}

export default Loading2
