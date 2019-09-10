import styled from 'styled-components'

export const Content = styled.div`
  height: 30px;
  .progress {
    position: relative;
    top: 13px;
    height: 4px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    &-load {
      position: absolute;
      left: 0;
      height: 100%;
      background-color: ${props => props.theme.themeColor};
    }
    &-btn {
      position: absolute;
      top: -6px;
      left: 0;
      width: 15px;
      height: 15px;
      background-color: ${props => props.theme.themeColor};
      border-radius: 50%;
    }
  }
`
