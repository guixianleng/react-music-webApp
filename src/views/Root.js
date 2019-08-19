import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import App from './App'
// 引入全局样式
import { GlobalStyle } from '../assets/styles/style';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    )
  }
}

export default Root
