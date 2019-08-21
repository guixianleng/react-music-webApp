import styled from 'styled-components'

export const AlbumImg = styled.div`
  position: relative;
  padding: 5px 20px;
  padding-bottom: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 275px;
  .background {
    z-index: -1;
    background: url(${props => props.background}) center center no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    transform-origin: center center;
    transition: transform;
    .filter {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .img_wrapper {
    width: 120px;
    height: 120px;
    position: relative;         
    .decorate {
      position: absolute;
      bottom: 6px;
      left: 6px;
      color: #fff;
      font-size: 12px
    }
  img {
    width: 120px;
    height: 120px;
    border-radius: 4px;
  }
  }
  .desc_wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    padding: 0 15px;
    .title {
      color: #fff;
      font-size: 16px;
    }
    .person{
      display: flex;
      .avatar{
        width: 20px;
        height: 20px;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name {
        line-height: 20px;
        font-size: 14px;
        color: #fff;
      }
    }
  }
  .brief {
    display: flex;
    align-items: center;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
      font-size: 14px;
      width: 180px;
      display: inline-block
    }
    .iconfont {
      color: #fff;
      font-size: 14px;
    }
  }
`

export const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  margin: -80px 0 25px 0;
  > div {
    display: flex;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #FFF;
    z-index: 1000;
    .iconfont {
      font-size: 24px;
      padding-right: 6px
    }
  }
`
