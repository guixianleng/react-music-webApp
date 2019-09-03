import { connect } from 'react-redux'
import { setCurrentSong, removeSong, changeIndex } from '../redux/actions'
import PlayList from '../components/Player/PlayList'

const mapStateToProps = (state) => ({
  // 当前歌曲
  currentSong: state.currentSong,
  // 播放歌曲列表
  playSongs: state.songsList
})

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(setCurrentSong(song))
  },
  changeCurrentIndex: (index) => {
    dispatch(changeIndex(index))
  },
  removeSong: (id) => {
    dispatch(removeSong(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)