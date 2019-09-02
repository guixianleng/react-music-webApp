import styled from 'styled-components'
import style from '../../../assets/style/variable'

export const Container = styled.div`
  &.player-list {
    position: fixed;
    bottom: 45px;
    left: 0;
    right: 0;
    height: 345px;
    background-color: ${props => props.bgColor || '#fff'};
    opacity: .98;
    z-index: 100;
    zoom: 1;
    .cover-bg {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .5);
      z-index: -2;
    }
    > header {
      position: fixed;
      bottom: 390px;
      left: 0;
      right: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      height: 45px;
      line-height: 45px;
      background-color: #fff;
      border-bottom: 1px solid ${style['border-color']};
      > div {
        .iconfont {
          font-size: 20px;
          color: #666;
          vertical-align: top;
        }
        span {
          padding-left: 6px;
          font-size: 14px;
          color: #333;
        }
      }
    }
    .player-close {
      border-top: 1px solid ${style['border-color']};
      text-align: center;
      font-size: 15px;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 45px;
      line-height: 45px;
      background-color: #fff;
    }
  }
`

export const SongList = styled.div`
  .list-ul {
    padding: 0 10px;
    background-color: ${props => props.bgColor || '#fff'};
    .list-li {
      display: flex;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid ${style['border-color']};
      .info {
        flex-basis: 100%;
        display: flex;
        align-items: center;
        ${style.noWrap()};
        > span {
          &:first-child {
            color: #333;
            max-width: 80%;
            display: inline-block;
            ${style.noWrap()};
            font-size: 14px;
            padding-right: 4px;
          }
          &:last-child {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .more {
        text-align: center;
        flex-basis: 20px;
        .iconfont {
          font-size: 20px;
          color: #666
        }
      }
    }
  }
`