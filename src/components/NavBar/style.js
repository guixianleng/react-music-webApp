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
    z-index: 9999;
    background-color: transparent;
    /* &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      filter: blur(5px);
    }  */
    &-back {
      .iconfont {
        font-size: 22px;
      }
    }
    &-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      font-weight: 400
    }
  }
`