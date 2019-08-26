import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 300px;
  .background {
    z-index: -1;
    background: url(${props => props.bgImg}) center center no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: saturate(50%);
    transform-origin: top center;
    transition: transform;
    .filter {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      text-align: center;
      font-family: cursive;
      h1 {
        margin-top: 100px;
        font-size: 25px;
        margin-bottom: 10px;
      }
      > div {
        font-size: 50px;
      }
    }
  }
  .ranking-info {
    position: absolute;
    bottom: 30px;
    right: 0;
    left: 0;
    color: #fff;
    text-align: center;
    > div {
      display: inline-block;
      height: 35px;
      line-height: 35px;
    }
    .update-time {
      font-size: 14px;
    }
    .comment {
      position: absolute;
      top: 0;
      right: 30px;
      bottom: 0;
      .iconfont {
        font-size: 30px;
        color: #fff;
        &::after {
          content: "";
          position: absolute;
          top: -2px;
          right: -22px;
          height: 15px;
          width: 30px;
          background: rgba(0, 0, 0, 0.8);
        }
      }
      > span {
        font-size: 12px;
        position: absolute;
        top: -2px;
        right: -20px;
        height: 15px;
        line-height: 15px;
        padding: 0 3px;
      }
    }
  }
`

export const Content = styled.div`
  &.detail-songs {
    position: absolute;
    top: 280px;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 100%;
  }
  .view-scroll {
    width: 100%;
    height: 100%;
  }
  .scroll-view {
    overflow: visible
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
`