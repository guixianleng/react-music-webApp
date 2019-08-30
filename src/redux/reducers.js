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

// 添加或移除搜索历史
function historySearch (defaultList = initState.historyList, action) {
  switch (action.type) {
    case ActionTypes.SET_HISTORY:
      let searchList = storage.getHistorySearch()
      if (!action.add) {
        let index = searchList.findIndex(item => item === action.keyword)
        if (index === -1) {
          searchList.unshift(action.keyword)
        }
      } else {
        searchList = action.keyword
      }
      storage.setHistorySearch(searchList)
      return searchList
    default:
      return defaultList
  }
}

const reducer = combineReducers({
  skin,
  historySearch
})

export default reducer