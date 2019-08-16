import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  background-color: #31C27C;
  .header {
    &-back {
      position: absolute;
      top: 14px;
      left: 10px;
      font-size: 14px;
    }
    &-title {
      margin: 0 40px;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`