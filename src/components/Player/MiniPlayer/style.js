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
  background-color: ${props => props.theme.bgColor};
  border-top: 1px solid ${props => props.theme.borderColor};
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
      ${style.noWrap()};
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.color};
      span {
        &:last-child {
          font-size: 12px;
          color: #666;
          padding-top: 5px;
        }
      }
    }
    &__right {
      .iconfont {
        display: inline-block;
        padding-left: 15px;
        font-size: 24px;
        color: ${props => props.theme.themeColor};
      }
    }
    .is_disabled {
      color: #666;
      .iconfont {
        color: #bcbec2;
      }
    }
  }
`