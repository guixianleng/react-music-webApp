import styled from 'styled-components'

export const Content = styled.div`
  position: relative;
  height: 100%;
`

export const SongList = styled.div`
  border-radius: 10px;
  overflow: hidden;
  .first_line {
    box-sizing: border-box;
    padding: 15px 0;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    align-items: center;
    background-color: #fff;
    .play_all {
      display: inline-block;
      margin-left: 10px;
      line-height: 24px;
      color: #333;
      .iconfont {
        font-size: 30px;
        margin-right: 10px;
        vertical-align: middle;
        color: ${props => props.theme.color}
      }
      .sum {
        font-size: 16px;
        color: #333;
      }
      > span {
        vertical-align: top;
      }
    }
    .add_list {
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
        color: #333;
      }
    }
  }
`
export const SongItem = styled.div`
  &.song-list {
    min-height: 70vh;
    height: auto;
    .song-ul {
      background-color: #fff;
      padding-bottom: 50px;
      .song-li {
        display: flex;
        height: 60px;
        align-items: center;
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
          border-bottom: 1px solid #e4e4e4;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          > span {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            height: 28px;
            line-height: 28px;
            &:first-child {
              color: #333;
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
          border-bottom: 1px solid #e4e4e4;
          .iconfont {
            font-size: 24px;
            color: #666
          }
        }
      }
    }
  }
`