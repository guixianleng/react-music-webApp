import styled from 'styled-components'
import style from '../../assets/style/variable'

export const Content = styled.div`
  position: relative;
  height: 100%;
`

export const SongList = styled.div`
  .song-top {
    box-sizing: border-box;
    padding: 12px 0;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    &__all {
      display: inline-block;
      margin-left: 10px;
      line-height: 24px;
      color: ${props => props.theme.color};
      .iconfont {
        font-size: 30px;
        margin-right: 10px;
        vertical-align: middle;
        color: ${props => props.theme.themeColor}
      }
      .sum {
        font-size: 16px;
      }
    }
    &__list {
      display: flex;
      align-items: center;
      position: absolute;
      right: 15px;
      top: 0;
      bottom: 0;
      line-height: 34px;
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        font-size: 24px;
        color: ${props => props.theme.color}
      }
    }
  }
`
export const SongItem = styled.div`
  &.song-list {
    min-height: 70vh;
    height: auto;
    .song-ul {
      background-color: ${props => props.theme.bgColor};
      padding-bottom: 10px;
      .song-li {
        display: flex;
        height: 60px;
        align-items: center;
        color: ${props => props.theme.color};
        .index {
          flex-basis: 60px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
        }
        .info {
          box-sizing: border-box;
          flex: 1;
          display: flex;
          height: 100%;
          padding: 5px 0;
          flex-direction: column;
          justify-content: space-around;
          border-bottom: 1px solid ${props => props.theme.borderColor};
          ${style.noWrap()};
          > span {
            height: 24px;
            line-height: 24px;
            color: ${props => props.theme.color};
            ${style.noWrap()};
            &:first-child {
              font-size: 14px
            }
            &:last-child {
              font-size: 12px;
              color: #999;
            }
          }
        }
        .more {
          flex-basis: 50px;
          width: 50px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px solid ${props => props.theme.borderColor};
          .iconfont {
            font-size: 24px;
            color: ${props => props.theme.color}
          }
        }
      }
    }
  }
`