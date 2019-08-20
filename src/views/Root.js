import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import App from './App'
// 引入全局样式
import { GlobalStyle } from '../assets/style/style';
import { AnimateStyle } from '../assets/style/animate';
import { IconStyle } from '../assets/style/iconfont/iconfont';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
        <GlobalStyle />
        <IconStyle />
        <AnimateStyle />
      </Provider>
    )
  }
}

export default Root
