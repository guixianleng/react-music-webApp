import * as ActionTypes from './actionTypes'

// 设置皮肤
export function setSkin (skin) {
  return { type: ActionTypes.SET_SKIN, skin }
}

// 设置歌曲
export function setSong (song) {
  return { type: ActionTypes.SET_SONG, song }
}

// 更改歌曲
export function changeSong (song) {
  return { type: ActionTypes.CHANGE_SONG, song }
}

// 设置历史搜索
export function setHistory (keyword, add) {
  return { type: ActionTypes.SET_HISTORY, keyword, add }
}