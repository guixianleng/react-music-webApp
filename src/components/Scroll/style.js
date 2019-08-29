import styled from 'styled-components'


export const ScrollDiv = styled.div`
  &.scroll-view {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
export const PullUpLoading = styled.div`
  position: absolute;
  left:0;
  right:0;
  bottom: 5px;
  margin: auto;
  height: 20px;
  line-height: 20px;
  z-index: 100;
  display: ${props => props.pullUp ? '' : 'none'}
`
export const PullDownLoading = styled.div`
  position: absolute;
  left:0;
  right:0;
  top: 0px;
  height: 20px;
  line-height: 20px;
  margin: auto;
  z-index: 100;
  display: ${props => props.pullDown ? '' : 'none'}
`