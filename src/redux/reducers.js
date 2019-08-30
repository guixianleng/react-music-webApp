import { combineReducers } from 'redux'
import storage from '../utils/storage'
import * as ActionTypes from './actionTypes'

const initState = { // 默认数据
  skin: storage.getSkin(),
  historyList: storage.getHistorySearch() || []
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

// 设置历史搜索
function historySearch (defaultList = initState.historyList, action) {
  switch (action.type) {
    case ActionTypes.SET_HISTORY:
      storage.setHistorySearch(action.keyword, action.add)
      return action.keyword
    default:
      return defaultList
  }
}

const reducer = combineReducers({
  skin,
  historySearch
})

export default reducer