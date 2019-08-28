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
    &-bg {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      color: #fff;
      text-align: center;
    }
    &-top {
      color: #fff;
      text-align: center;
      font-family: cursive;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        font-size: 30px;
        margin-bottom: 10px;
        line-height: 1.2
      }
      > div {
        font-size: 50px;
      }
    }
    &-bottom {
      position: relative;
      margin-top: 40px;
      position: absolute;
      bottom: 40px;
      left: 0;
      right: 0;
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
