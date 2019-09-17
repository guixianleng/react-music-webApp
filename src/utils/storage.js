const storage = {
  // 设置皮肤
  setSkin(key) {
    window.localStorage.setItem('skin', JSON.stringify(key))
  },
  // 获取皮肤
  getSkin() {
    const defaultSkin = {
      name: 'qqGreen',
      color: '#31C27C'
    }
    const skin = window.localStorage.getItem('skin')
    return !skin ? JSON.parse(defaultSkin) : JSON.parse(skin)
  },
  // 设置当前歌曲
  setCurrentSong(song) {
    window.localStorage.setItem('current_song', JSON.stringify(song))
  },
  getCurrentSong() {
    const song = window.localStorage.getItem('current_song')
    return song ? JSON.parse(song) : {}
  },
  // 设置歌曲列表
  setSongs(songs) {
    window.localStorage.setItem('songs_list', JSON.stringify(songs))
  },
  getSongs() {
    const songs = window.localStorage.getItem('songs_list')
    return songs ? JSON.parse(songs) : []
  },
  // 设置当前歌曲号
  setCurrentIndex(index) {
    window.localStorage.setItem('current_index', index)
  },
  // 获取当前歌曲号
  getCurrentIndex() {
    const index = window.localStorage.getItem('current_index')
    return index ? Number(index) : 0
  },
  // 获取历史搜索
  getHistorySearch() {
    const list = window.localStorage.getItem('history_search')
    return list ? JSON.parse(list) : []
  },
  // 设置历史搜索
  setHistorySearch(list) {
    window.localStorage.setItem('history_search', JSON.stringify(list))
  },
  // 设置播放模式
  setPlayMode(mode) {
    window.localStorage.setItem('paly_mode', mode)
  },
  // 获取播放模式
  getPlayMode() {
    const mode = window.localStorage.getItem('paly_mode')
    return mode ? Number(mode) : 0
  }
}

export default storage