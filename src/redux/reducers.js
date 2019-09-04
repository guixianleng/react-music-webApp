import { combineReducers } from 'redux'
import storage from '../utils/storage'
import * as ActionTypes from './actionTypes'
import { findIndex } from '../utils'

const initState = { // 默认数据
  skin: storage.getSkin(),
  historyList: storage.getHistorySearch() || [],
  showPlayer: false, // 是否显示全屏播放器
  currentSong: storage.getCurrentSong(), // 当前歌曲
  currentIndex: storage.getCurrentIndex(), // 当前歌曲序号
  songs: storage.getSongs(), // 歌曲列表
  mode: storage.getPlayMode() // 播放模式
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
    case ActionTypes.SET_CURRENT_SONG:
      storage.setCurrentSong(action.song)
      return action.song
    default:
      return currentSong
  }
}

// 设置当前歌曲号
function currentIndex (index = initState.currentIndex, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_INDEX:
      storage.setCurrentIndex(action.index)
      return action.index
    default:
      return index
  }
}

// 更新歌曲列表（新增或删除）
function songsList (songsList = initState.songs, action) {
  switch (action.type) {
    case ActionTypes.SET_SONGS:
      let newSongs = []
      /**
       * 无数据直接新增
       */
      if (action.songs.length > 1) {
        newSongs = action.songs
      } else { // 新加入数据加入最前面
        newSongs = [...songsList]
        let addSong = action.songs[0]
        let index = findIndex(addSong.id, newSongs)
        let currentSongId = storage.getCurrentIndex()
        // 当前播放歌曲的位置
        let currentId = findIndex(currentSongId, newSongs)
        // 不存在列表中，则插入
        if (index === -1) {
          // 插入当前歌曲的下一个位置
          newSongs.splice(currentId + 1, 0, addSong)
        }
      }
      storage.setSongs(newSongs)
      return newSongs
    case ActionTypes.REMOVE_SONG_FROM_LIST:
      /**
       * all 清空歌曲列表
       */
      let newSongsList = []
      if (action.id !== 'all') {
        newSongsList = songsList.filter(song => song.id !== action.id)
      }
      storage.setSongs(newSongsList)
      return newSongsList
    default: 
      return songsList
  }
}

// 更改播放模式
function playMode (defaultMode = initState.mode, action) {
  switch (action.type) {
    case ActionTypes.PLAY_MODE:
      storage.setPlayMode(action.mode)
      return action.mode
    default:
      return defaultMode
  }
}

const reducer = combineReducers({
  skin,
  historySearch,
  showPlayer,
  currentSong,
  currentIndex,
  songsList,
  playMode
})

export default reducer