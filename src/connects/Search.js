import { connect } from 'react-redux'
import { showPlayer, setCurrentSong, changeIndex, setHistory, setSongs } from '../redux/actions'
import Search from '../views/search'

const mapStateToProps = (state) => ({
  historyList: state.historySearch
})

const mapDispatchToProps = (dispatch) => ({
  // 历史搜索
  setHistory: (keyword, add) => {
    dispatch(setHistory(keyword, add))
  },
  // 显示隐藏播放器
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  },
  changeCurrentSong: (song) => {
    dispatch(setCurrentSong(song))
  },
  changeCurrentIndex: (song) => {
    dispatch(changeIndex(song))
  },
  // 设置歌曲列表
  setSongs: (songs) => {
    dispatch(setSongs(songs))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)