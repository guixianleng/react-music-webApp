import styled from "styled-components";

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
      h1 {
        margin-top: 100px;
        font-size: 25px;
        margin-bottom: 10px;
      }
      > div {
        font-size: 50px;
      }
    }
    &-bottom {
      position: relative;
      margin-top: 40px;
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
            right: -18px;
            height: 15px;
            width: 30px;
            background: rgba(0, 0, 0, 1);
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
  }
`;
