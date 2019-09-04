import * as ActionTypes from './actionTypes'

// 设置皮肤
export function setSkin(skin) {
  return {
    type: ActionTypes.SET_SKIN,
    skin
  }
}

// 显示播放器
export function showPlayer(showStatus) {
  return {
    type: ActionTypes.SHOW_PLAYER,
    showStatus
  };
}

// 设置歌曲列表
export function setSongs(songs) {
  return {
    type: ActionTypes.SET_SONGS,
    songs
  }
}

// 设置当前歌曲
export function setCurrentSong(song) {
  return {
    type: ActionTypes.SET_CURRENT_SONG,
    song
  }
}

// 删除歌曲
export function removeSong(id) {
  return {
    type: ActionTypes.REMOVE_SONG_FROM_LIST,
    id
  }
}

// 设置历史搜索
export function setHistory(keyword, add) {
  return {
    type: ActionTypes.SET_HISTORY,
    keyword,
    add
  }
}

// 更改当前歌曲序号
export function changeIndex(index) {
  return {
    type: ActionTypes.CHANGE_INDEX,
    index
  }
}

// 更改播放模式
export function changePlayMode(mode) {
  return {
    type: ActionTypes.PLAY_MODE,
    mode
  }
}