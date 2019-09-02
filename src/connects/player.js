import { connect } from 'react-redux'
import { showPlayer, changeSong, setSong } from '../redux/actions'
import Player from '../components/Player'

const mapStateToProps = (state) => ({
  // 显示播放器
  showPlayer: state.showPlayer,
  // 当前歌曲
  currentSong: state.currentSong,
  // 播放歌曲列表
  playSongs: state.getSongsList
})

const mapDispatchToProps = (dispatch) => ({
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  },
  changeCurrentSong: (song) => {
    dispatch(changeSong(song))
  },
  setSongs: (song) => {
    dispatch(setSong(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)