import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 300px;
  .background {
    z-index: -1;
    background: url(${props => props.bgImg}) center center no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: saturate(50%);
    transform-origin: top center;
    transition: transform;
    .filter {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
    }
  }
`

export const Content = styled.div`
  &.detail-songs {
    position: absolute;
    top: 280px;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 100%;
  }
  .view-scroll {
    width: 100%;
    height: 100%;
  }
  .scroll-view {
    overflow: visible
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
`