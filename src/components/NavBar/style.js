import styled from 'styled-components';

export const Header = styled.div`
  &.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 14px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 15px;
    z-index: 99;
    transition: all .6s;
    &::before {
      display: ${props => props.bgImg ? '' : 'none'};
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      filter: blur(20px);
      background: url(${props => props.bgImg}) center center no-repeat;
      background-size: cover;
    }
    
    &::after {
      display: ${props => props.bgImg ? '' : 'none'};
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -2;
      background-color: rgba(0, 0, 0, 0.5)
    }
    &-back {
      .iconfont {
        font-size: 22px;
      }
    }
    &-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      font-weight: 400
    }
  }
`