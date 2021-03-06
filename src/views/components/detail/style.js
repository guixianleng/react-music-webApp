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
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .insert-wrapper {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
  }
`

export const Content = styled.div`
  &.detail-songs {
    position: absolute;
    top: 280px;
    bottom: 50px;
    left: 0;
    right: 0;
    height: calc(100vh - 330px);
  }
  .view-scroll {
    width: 100%;
    height: 100%;
  }
  .scroll-view {
    overflow: visible
  }
  .detail-info {
    padding: 15px;
    line-height: 1.4;
    font-size: 14px;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
`