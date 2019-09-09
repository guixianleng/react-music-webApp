import styled from 'styled-components'
import style from '../../assets/style/variable'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  h2 {
    text-align: center;
    font-size: 16px;
    padding: 15px 0 0;
    display: ${props => props.show ? 'none' : ''};
  }
`

export const List = styled.ul`
  &.rank-ul {
    display: ${props => props.global ? 'flex': ''};
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: ${props => props.global ? '10px 5px' : '10px 0'};
  }
`

export const ListItem = styled.li`
  &.rank-li {
    padding: ${props => props.trick ? '0 0px 45px': '0 10px 15px'};
    display: flex;
    align-items: center;
    width: ${props => props.trick ? '33%' : ''};
    .rank-li_img {
      width: ${props => props.trick ? '32vw' : '27vw'};
      height: ${props => props.trick ? '32vw' : '27vw'};
      border-radius: 3px;
      position: relative;
      .decorate {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 35px;
        border-radius: 3px;
        background: linear-gradient(hsla(0, 0%, 100%, 0),hsla(0, 0%, 43%, .4));
        &-left,
        &-bottom {
          position: absolute;
          bottom: 4px;
          color: #fff;
        }
        &-left {
          left: 4px;
          bottom: 7px;
          > span {
            font-size: 12px;
            padding-left: 2px;
          }
          .iconfont {
            font-size: 18px;
            vertical-align: bottom
          }
        }
        &-bottom {
          right: 4px;
          .iconfont {
            font-size: 24px;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        margin-bottom: 2px;
      }
    }
    .type-title {
      font-size: 14px;
      line-height: 1.2
    }
  }
`

export const RankList = styled.div`
  &.ranking-list {
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    ${style.noWrap()};
    > div {
      font-size: 14px;
      width: 100%;
      ${style.noWrap()};
      .index {
        margin-right: 10px
      }
      > span {
        height: 24px;
        line-height: 24px;
      }
    }
  }
`
