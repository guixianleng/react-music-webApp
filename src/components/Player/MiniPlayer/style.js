import styled, { keyframes } from 'styled-components'
import style from '../../../assets/style/variable'

export const Rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid ${style['border-color']};
  .mini-player {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 10px;
    height: 52px;
    &__left {
      width: 45px;
      height: 45px;
      &.rotate {
        animation: ${Rotate} 16s linear infinite;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: center center;
      }
    }
    &__center {
      flex: 2;
      padding: 0 10px;
      font-size: 14px;
      ${style.noWrap()}
    }
    &__right {
      .iconfont {
        display: inline-block;
        padding-left: 15px;
        font-size: 24px;
        color: ${props => props.theme.color};
      }
    }
  }
`