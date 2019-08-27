import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0
`

export const AlbumImg = styled.div`
  position: relative;
  padding: 5px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
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
    padding-left: 15px;
    .title {
      color: #fff;
      font-size: 16px;
      line-height: 1.4
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
    height: 40px;
    line-height: 40px;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
      font-size: 12px;
      width: 240px;
      display: inline-block
    }
    .iconfont {
      color: #fff;
      font-size: 12px;
    }
  }
`

export const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  margin-top: 30px;
  > div {
    display: flex;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #FFF;
    .iconfont {
      font-size: 24px;
      padding-right: 2px
    }
    .favorite {
      color: #d81e06
    }
  }
`