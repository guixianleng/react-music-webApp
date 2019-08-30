import styled from "styled-components";
import style from '../../assets/style/variable'

export const Container = styled.div`
  height: 100%;
  margin-bottom: 10px;
  .title {
    font-size: 14px;
    color: #666;
    font-weight: 400;
  }
`;

export const NavSearch = styled.header`
  &.search-box {
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    /* background-color: ${props => props.theme.backgroundColor}; */
    color: #333;
    .search-input {
      flex: 2;
      padding: 8px 10px;
      font-size: 14px;
      background: #e3e4e4;
      border: none;
      outline: none;
      color: #333;
    }
    .search-button {
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;

export const Hot = styled.div`
  &.search-hot {
    font-size: 14px;
    padding: 20px 10px 10px;
    background-color: #fff;
    .hot-list {
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .hot-item {
      border: 1px solid ${style['border-color']};
      padding: 0 12px;
      height: 28px;
      line-height: 28px;
      color: #333;
      border-radius: 20px;
      margin: 10px 6px 0 0;
    }
  }
`

export const HistoryContent = styled.div`
  display: ${props => props.show ? 'none' : ''};
  padding: 0 10px;
  background-color: #fff;
  .top {
    border-bottom: 1px solid ${style['border-color']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    > span {
      font-size: 14px;
      color: #666;
    }
  }
  .view-scroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
export const History = styled.ul`
  height: 100%;
  padding-bottom: 10px
`

export const HistoryItem = styled.li`
  border-bottom: 1px solid ${style['border-color']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  font-size: 15px;
  > span {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: inline-block
  }
`

export const ResultContent = styled.div`
  position: fixed;
  top: 153px;
  bottom: 52px;
  left: 0;
  right: 0;
  background-color: #fff;
  display: ${props => props.show ? '' : 'none'}
`

export const ResultList = styled.ul`
  
`

export const ResultItem = styled.li`
  border-bottom: 1px solid ${style['border-color']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  .iconfont {
    flex-basis: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
  }
  > span {
    flex-basis: 100%;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    ${style.noWrap()};
    margin-right: 6px;
    > em {
      color: ${props => props.theme.color}
    }
  }
`