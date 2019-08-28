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
      .info {
        position: absolute;
        bottom: 40px;
        left: 0;
        right: 0;
        h1 {
          font-size: 20px;
          font-weight: 400;
        }
        &-footer {
          margin-top: 20px;
          > span {
            display: inline-block;
            border: 1px solid #fff;
            width: 70px;
            text-align: center;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            margin: 0 8px;
            border-radius: 24px;
            &.followed {
              color: ${props => props.theme.color}
            }
          }
        }
      }
    }
  }
`