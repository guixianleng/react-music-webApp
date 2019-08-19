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
  width: 10px;
  height: 10px;
  margin: auto;
  z-index: 1;
  position: relative;
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
`;

function Loading2 () {
  return (
    <LoadingDiv />
  )
}

export default Loading2
