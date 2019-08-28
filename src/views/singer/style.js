import styled from 'styled-components'
import style from '../../assets/style/variable'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .singer-list {
    position: absolute;
    top: 122px;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 20px;
    background-color: #fff;
    .singer-wrapper {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &:first-child {
        padding-top: 10px
      }
      &:last-child {
        padding-bottom: 10px
      }
      .singer-img {
        margin-right: 10px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .singer-name {
        width: 100%;
        font-size: 14px;
        height: 50px;
        border-bottom: 1px solid ${style['border-color']};
        display: flex;
        align-items: center;
        ${style.noWrap()};
        > div {
          width: 92%;
          ${style.noWrap()};
        }
        .iconfont {
          text-align: right
        }
      }
    }
  }
`;

export const Labels = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LabelsItem = styled.li`
  padding: 4px 0;
  color: inherit;
  text-align: center;
  font-size: 12px;
  &.selected {
    color: ${props => props.theme.color};
  }
`;

export const ContentLabels = styled.div`
  position: fixed;
  top: 60%;
  transform: translateY(-60%);
  right: 10px;
  z-index: 100;
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 10px;
  padding: 4px;
  border: 1px solid ${style['border-color']};
  box-shadow: 1px 1px 1px ${style['border-color']};
  opacity: ${props => props.opacity};
  transition: opacity 2s;
`;

export const NavContainer  = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 85px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .scroll-view {
    border-bottom: 1px solid ${style['border-color']};
  }
`;