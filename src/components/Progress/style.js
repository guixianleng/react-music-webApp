import styled from 'styled-components'

export const Content = styled.div`
  height: 30px;
  .progress {
    position: relative;
    top: 13px;
    height: 4px;
    border-radius: 4px;
    background: rgba(255,255,255,.1);
    &-load {
      position: absolute;
      height: 100%;
      background: ${props => props.theme.backgroundColor};
    }
    &-btn {
      position: absolute;
      top: -6px;
      width: 15px;
      height: 15px;
      background-color: #FFF;
      border-radius: 50%;
    }
  }
`
