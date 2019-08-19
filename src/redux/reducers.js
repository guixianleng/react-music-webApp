import { combineReducers } from 'redux'
import storage from '../utils/storage'
import * as ActionTypes from './actionTypes'

const initState = { // 默认数据
  skin: storage.getSkin()
}

// 设置皮肤
function skin (defaultSkin = initState.skin, action) {
  switch (action.type) {
    case ActionTypes.SET_SKIN:
      storage.setSkin(action.skin)
      return action.skin
    default:
      return defaultSkin
  }
}

const reducer = combineReducers({
  skin
})

export default reducer