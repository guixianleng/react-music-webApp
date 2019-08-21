import styled from 'styled-components'

export const ListWrapper = styled.div`
  max-width: 100%;
  background-color: #f2f3f4;
  .title {
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    color: inherit;
  }
`

export const Lists = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction：row;
`

export const ListItem = styled.div`
  position: relative;
  width: 32%;
  .decorate {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(hsla(0, 0%, 43%, .4), hsla(0, 0%, 100%, 0));
    &-bottom {
      position: absolute;
      bottom: 10px;
      right: 6px;
      color: #fff;
      .iconfont {
        font-size: 24px;
      }
    }
  }
  .img_wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 4px;
    padding: 0 2px;
    text-align: left;
    font-size: 12px;
    line-height: 1.2;
    color: #333;
    &-singer {
      padding: 0 2px;
      margin-top: 5px;
      font-size: 12px;
      color: #999;
      margin-bottom: 15px;
      line-height: 1.2;
    }
  }
`
