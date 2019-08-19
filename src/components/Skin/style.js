import styled from 'styled-components'

export const SkinDiv = styled.div`
  display: ${props => props.show ? 'block': 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  color: #FFFFFF;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  .skin {
    display: flex;
    margin-top: 65px;
    flex-wrap: wrap;
    font-size: 14px;
    &-wrapper {
      flex: 0 0 28%;
      text-align: center;
      margin-left: 4%;
      margin-bottom: 15px;
      box-sizing: border-box;
    }
    &-color {
      padding-bottom: 110%;
      margin-bottom: 10px;
      box-shadow: 0 0 3px #FFFFFF;
      position: relative;
      .icon-right {
        position: absolute;
        right: 5px;
        bottom: 5px;
        font-size: 20px;
      }
    }
  }
`