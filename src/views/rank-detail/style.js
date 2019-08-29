import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f0f0f0;
  .insert {
    &-top {
      font-family: cursive;
      margin: auto;
      width: 250px;
      h1 {
        font-size: 36px;
        line-height: 1.2;
        margin-bottom: 20px;
      }
    }
    &-bottom {
      position: relative;
      > div {
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
        }
        > span {
          font-size: 12px;
          padding-left: 2px;
          vertical-align: text-bottom;
        }
      }
    }
  }
`;
