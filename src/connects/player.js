import { connect } from 'react-redux'
import { showPlayer, setCurrentSong, setSongs, changeIndex, changePlayMode } from '../redux/actions'
import Player from '../components/Player'

const mapStateToProps = (state) => ({
  // 显示播放器
  showPlayer: state.showPlayer,
  // 当前歌曲
  currentSong: state.currentSong,
  // 播放歌曲列表
  playSongs: state.songsList,
  // 设置当前歌曲号
  currentIndex: state.currentIndex,
  // 播放模式
  mode: state.playMode
})

const mapDispatchToProps = (dispatch) => ({
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  },
  changeCurrentSong: (song) => {
    dispatch(setCurrentSong(song))
  },
  setSongs: (song) => {
    dispatch(setSongs(song))
  },
  changeCurrentIndex: (index) => {
    dispatch(changeIndex(index))
  },
  changePlayMode: (mode) => {
    dispatch(changePlayMode(mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)