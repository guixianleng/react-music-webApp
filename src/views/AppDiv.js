import styled from 'styled-components'

export const AppDiv = styled.div`
.app {
  width: 100%;
  height: 100%;
  position: relative;
  &-content {
    position: fixed;
    top: 90px;
    left: 0;
    bottom: 52px;
    width: 100%;
  }
}
.pull-down-desc {
  margin-top: 10px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .iconfont {
    color: ${props => props.theme.color};
    font-size: 18px;
  }
  span {
    font-size: 12px;
    color: ${props => props.theme.color};
    padding-left: 4px;
  }
}
`