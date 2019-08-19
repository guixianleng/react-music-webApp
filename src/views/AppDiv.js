import styled from 'styled-components'

export const AppDiv = styled.div`
.app {
  width: 100%;
  height: 100%;
  position: relative;
  &-header{
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    background-color: ${props => props.backgroundColor || '#31C27C'};
    color: #fff;
  }
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
  &-tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 10px;
  }
}

.nav-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  &__active {
    position: relative;
    &::after {
      display: block;
      content: "";
      height: 2px;
      width: 100%;
      background-color: #31C27C;
      position: absolute;
      bottom: -12px;
      left: 0;
      right: 0;
    }
  }
}
`