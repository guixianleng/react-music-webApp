import styled from 'styled-components'

export const HeaderDiv = styled.header`
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
  background-color: ${props => props.theme.backgroundColor};
  color: #fff;
  .header {
    &-more {
      position: absolute;
      top: 15px;
      left: 15px;
      font-size: 20px;
    }
    &-logo {
      width: 30px;
      height: 25px;
      margin-top: -5px;
      vertical-align: middle;
    }
    &-title {
      display: inline-block;
      height: 55px;
      margin-left: 10px;
      font-size: 18px;
      font-weight: 300;
    }
  }
`