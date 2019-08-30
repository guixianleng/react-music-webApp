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
  setCurrentSong (song) {
    window.localStorage.setItem('song', JSON.stringify(song))
  },
  getCurrentSong () {
    const song = window.localStorage.getItem('song')
    return song ? JSON.parse(song) : {}
  },
  setSongs (songs) {
    window.localStorage.setItem('songs', JSON.stringify(songs))
  },
  getSongs () {
    const songs = window.localStorage.getItem('songs')
    return songs ? JSON.parse(songs) : []
  },
  // 获取历史搜索
  getHistorySearch () {
    const list = window.localStorage.getItem('history_search')
    return list ? JSON.parse(list) : []
  },
  // 设置历史搜索
  setHistorySearch (key, add = null) {
    let list = window.localStorage.getItem('history_search')
    list = list ? JSON.parse(list) : []
    if (!add) {
      list.push(key)
    } else {
      list = key
    }
    window.localStorage.setItem('history_search', JSON.stringify(list))
  }
}

export default storage
