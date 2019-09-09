import styled, { keyframes } from 'styled-components'
import style from '../../assets/style/variable'

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
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #212121;
  .player-top {
    text-align: center;
    .singer-name {
      position: relative;
      color: #FFFFFF;
      font-size: 14px;
      height: 16px;
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 1px;
        background-color: #FFFFFF;
      }
      &:before {
        left: -30px;
      }
      &:after {
        right: -30px;
      }
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.bgImg}) no-repeat center center;
    background-size: cover;
    filter: blur(20px);
    opacity: .6;
    margin: -35px;
    z-index: -1;
  }
`

export const NavHeader = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 15px;
  font-size: 16px;
  color: #fff;
  .iconfont {
    font-size: 24px;
    color: #fff;
  }
  .player-title {
    ${style.noWrap()};
    padding: 0 20px;
  }
`

export const Middle = styled.div`
  position: absolute;
  top: 100px;
  bottom: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .play-img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 8px solid rgba(221, 221, 221, 0.1);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &.rotate {
      animation: ${Rotate} 16s linear infinite
    }
  }
`

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 25px;
  height: 120px;
  .player-progress {
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    font-weight: 400;
    .current-time,
    .total-time {
      flex-basis: 30px;
      color: #fff;
    }
    .current-time {
      text-align: left
    }
    .total-time {
      text-align: right
    }
    .play-progress {
      flex: 1
    }
  }
  .player-control {
    display: flex;
    margin-top: 10px;
    color: #FFF;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    .iconfont {
      font-size: 20px;
    }
    .previous,
    .next {
      font-size: 36px;
    }
    .play-button {
      font-size: 45px;
    }
  }
`