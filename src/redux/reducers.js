import { combineReducers } from 'redux'
import storage from '../utils/storage'
import * as ActionTypes from './actionTypes'

const initState = { // 默认数据
  skin: storage.getSkin(),
  historyList: storage.getHistorySearch() || [],
  showPlayer: false, // 是否显示全屏播放器
  currentSong: storage.getCurrentSong(), // 当前歌曲
  songs: storage.getSongs() // 歌曲列表
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
        /**
         * 是否存在搜索列表中
         */
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

// 显示或隐藏播放器
function showPlayer (showStatus = initState.showPlayer, action) {
  switch (action.type) {
    case ActionTypes.SHOW_PLAYER:
      return action.showStatus
    default:
      return showStatus
  }
}

// 设置当前歌曲
function currentSong (currentSong = initState.currentSong, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SONG:
      return action.song
    default:
      return currentSong
  }
}

// 更新歌曲列表（新增或删除）
function getSongsList (songsList = initState.songs, action) {
  switch (action.type) {
    case ActionTypes.SET_SONG:
      if (action.songs.length > 1) {
        return action.songs
      } else {
        let newSongs = [...songsList]
        let addSong = action.songs[0]
        let index = newSongs.findIndex(song => song.id === addSong.id)
        if (index === -1) {
          newSongs.push(addSong)
        }
        return newSongs
      }
    case ActionTypes.REMOVE_SONG_FROM_LIST:
      let newSongs = songsList.filter(song => song.id !== action.id)
      return newSongs
    default: 
      return songsList
  }
}

const reducer = combineReducers({
  skin,
  historySearch,
  showPlayer,
  currentSong,
  getSongsList
})

export default reducer