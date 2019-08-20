import styled from 'styled-components'

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: url(${props => props.bgImg}) no-repeat;
  background-size: cover;
`