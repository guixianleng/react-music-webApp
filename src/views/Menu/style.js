import styled from 'styled-components'

export const Cover = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  .cover-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #333;
    background-color: #EEE;
    div {
      height: 40px;
      line-height: 40px;
      background-color: #FFFFFF;
    }
    &--close {
      margin-top: 10px
    }
  }
`