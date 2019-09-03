const storage = {
  // 设置皮肤
  setSkin (key) {
    window.localStorage.setItem('skin', key)
  },
  // 获取皮肤
  getSkin () {
    const skin = window.localStorage.getItem('skin')
    return !skin ? 'qqGreen' : skin
  },
  // 设置当前歌曲
  setCurrentSong (song) {
    window.localStorage.setItem('current_song', JSON.stringify(song))
  },
  getCurrentSong () {
    const song = window.localStorage.getItem('current_song')
    return song ? JSON.parse(song) : {}
  },
  // 设置歌曲列表
  setSongs (songs) {
    window.localStorage.setItem('songs_list', JSON.stringify(songs))
  },
  getSongs () {
    const songs = window.localStorage.getItem('songs_list')
    return songs ? JSON.parse(songs) : []
  },
  // 设置当前歌曲号
  setCurrentIndex (index) {
    window.localStorage.setItem('current_index', index)
  },
  // 获取当前歌曲号
  getCurrentIndex () {
    const index = window.localStorage.getItem('current_index')
    return index ? Number(index) : 0
  },
  // 获取历史搜索
  getHistorySearch () {
    const list = window.localStorage.getItem('history_search')
    return list ? JSON.parse(list) : []
  },
  // 设置历史搜索
  setHistorySearch (list) {
    window.localStorage.setItem('history_search', JSON.stringify(list))
  }
}

export default storage
