import styled from 'styled-components'
import style from '../../assets/style/variable'

export const Container = styled.div`
  &.batch {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 99;
    background-color: #f5f5f5;
    color: ${props => props.theme.color};
    .footer {
      height: 40px;
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${props => props.theme.bgColor};
      z-index: 100;
      padding: 10px 0;
      border-top: 1px solid ${props => props.theme.borderColor};
      > div {
        flex: 1;
        text-align: center;
        .iconfont {
          font-size: 24px;
        }
        span {
          display: block;
          font-size: 14px;
          margin-top: 6px;
        }
      }
    }
    .wrapper-batch {
      position: fixed;
      top: 40px;
      left: 0;
      right: 0;
      bottom: 60px;
      z-index: 99;
      .scroll-view {
        overflow: hidden
      }
    }
    .batch-ul {
      background-color: ${props => props.theme.bgColor};
      .batch-li {
        display: flex;
        height: 60px;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid ${props => props.theme.borderColor};
        .song {
          &-select {
            flex-basis: 60px;
            width: 60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
          }
          &-info {
            flex: 1;
            display: flex;
            padding: 5px 0;
            flex-direction: column;
            justify-content: space-around;
            ${style.noWrap()};
            > span {
              ${style.noWrap()};
              height: 24px;
              line-height: 24px;
              &:first-child {
                font-size: 14px;
              }
              &:last-child {
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
      }
    }
  }
`
