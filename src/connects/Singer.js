import { connect } from 'react-redux'
import { showPlayer, setCurrentSong, setSongs, changeIndex } from '../redux/actions'
import SingerDetail from '../views/singer-detail'

const mapDispatchToProps = (dispatch) => ({
  // 显示隐藏播放器
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  },
  // 更改当前歌曲
  changeCurrentSong: (song) => {
    dispatch(setCurrentSong(song))
  },
  // 设置当前歌曲号
  changeCurrentIndex: (index) => {
    dispatch(changeIndex(index))
  },
  // 设置歌曲列表
  setSongs: (songs) => {
    dispatch(setSongs(songs))
  }
})

export default connect(null, mapDispatchToProps)(SingerDetail)
