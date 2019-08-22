import styled from 'styled-components'
import style from '../../assets/style/variable'

export const Container = styled.div`
  &.share {
    ${style.fixedPosition()};
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, .5);
    .wrapper-share {
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 14px;
      color: #333;
      background-color: #EEE;
      .types {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 12px 0;
        &-items {
          flex-basis: 25%;
          margin: 10px 0;
          text-align: center;
          > div {
            height: 50px;
            width: 50px;
            background-color: #fff;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0px auto 8px;
            .iconfont {
              font-size: 30px;
            }
          }
        }
      }
      .wechat {
        color: #00C800;
      }
      .friends,
      .qq,
      .letter {
        color: #31C27C
      }
      .zone {
        color: #FFCD00
      }
      .sina {
        color: #d81e06
      }
      .q-code {
        color: #1CC09E
      }
      .close {
        border-top: 1px solid ${style['border-color']};
        padding: 15px 0;
        text-align: center;
        font-size: 16px;
      }
    }
  }
`