import styled from 'styled-components'

export const Tab = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  background-color: ${props => props.theme.bgColor};
  height: 40px;
  .nav-link {
    text-decoration: none;
    color: ${props => props.theme.color};
    display: block;
    width: 100%;
    &__active {
      position: relative;
      &::after {
        display: block;
        content: "";
        height: 2px;
        width: 100%;
        background-color: ${props => props.theme.themeColor};
        position: absolute;
        bottom: -12px;
        left: 0;
        right: 0;
      }
    }
  }
`
