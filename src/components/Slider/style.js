import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: ${props => props.theme.bgColor};
  .slider-container {
    position: relative;
    width: 96%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 4px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${props => props.theme.themeColor};
    }
  }
`