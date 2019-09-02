import * as ActionTypes from './actionTypes'

// 设置皮肤
export function setSkin (skin) {
  return { type: ActionTypes.SET_SKIN, skin }
}

// 显示播放器
export function showPlayer(showStatus) {
  return { type: ActionTypes.SHOW_PLAYER, showStatus };
}

// 设置歌曲
export function setSong (songs) {
  return { type: ActionTypes.SET_SONG, songs }
}

// 更改歌曲
export function changeSong (song) {
  return { type: ActionTypes.CHANGE_SONG, song }
}

// 删除歌曲
export function removeSong(id) {
  return { type: ActionTypes.REMOVE_SONG_FROM_LIST, id };
}

// 设置历史搜索
export function setHistory (keyword, add) {
  return { type: ActionTypes.SET_HISTORY, keyword, add }
}