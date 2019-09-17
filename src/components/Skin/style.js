import styled from 'styled-components'

export const SkinDiv = styled.div`
  display: ${props => props.show ? 'block': 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  color: #FFFFFF;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  .skin-content {
    margin-top: 65px;
    h1 {
      color: #FFF;
      font-weight: 500;
      font-size: 16px;
      margin-left: 15px;
      margin-top: 20px;
    }
  }
  .skin {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin-top: 20px;
    &-wrapper {
      flex: 0 0 20%;
      text-align: center;
      margin-left: 4%;
      margin-bottom: 15px;
      box-sizing: border-box;
    }
    &-color {
      padding-bottom: 110%;
      margin-bottom: 10px;
      position: relative;
      .icon-right {
        position: absolute;
        right: 5px;
        bottom: 5px;
        font-size: 18px;
      }
    }
  }
`

export const PickColor = styled.div`
  &.pick-color {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 15px;
    .left {
      flex-basis: 80px;
      height: 80px;
      margin-right: 12px;
      border-radius: 3px;
      position: relative;
      .icon-defined {
        position: absolute;
        right: 5px;
        bottom: 5px;
        font-size: 16px;
      }
    }
    .right {
      flex-basis: 80%;
    }
    .hue-picker,
    .alpha-picker {
      margin: 15px auto;
    }
  }
`