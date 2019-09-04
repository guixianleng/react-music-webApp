import { connect } from 'react-redux'
import { showPlayer, setCurrentSong, removeSong, changeIndex, changePlayMode } from '../redux/actions'
import PlayList from '../components/Player/PlayList'

const mapStateToProps = (state) => ({
  // 显示播放器
  showPlayer: state.showPlayer,
  // 当前歌曲
  currentSong: state.currentSong,
  // 播放歌曲列表
  playSongs: state.songsList,
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
  changeCurrentIndex: (index) => {
    dispatch(changeIndex(index))
  },
  removeSong: (id) => {
    dispatch(removeSong(id))
  },
  changePlayMode: (mode) => {
    dispatch(changePlayMode(mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)