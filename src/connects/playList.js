import { connect } from 'react-redux'
import { changeSong, setSong } from '../redux/actions'
import PlayList from '../components/Player/PlayList'

const mapStateToProps = (state) => ({
  // 当前歌曲
  currentSong: state.currentSong,
  // 播放歌曲列表
  playSongs: state.getSongsList
})

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song))
  },
  setSongs: (song) => {
    dispatch(setSong(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)