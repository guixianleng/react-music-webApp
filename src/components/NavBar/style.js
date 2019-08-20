import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  font-size: 14px;
  height: 50px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 15px;
  z-index: 9999;
  .header {
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