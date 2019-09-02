import { connect } from 'react-redux'
import { showPlayer, changeSong, setSong } from '../redux/actions'
import Album from '../views/Album'

const mapDispatchToProps = (dispatch) => ({
  // 显示隐藏播放器 
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  },
  // 更改当前歌曲
  changeCurrentSong: (song) => {
    dispatch(changeSong(song))
  },
  // 设置歌曲列表
  setSongs: (songs) => {
    dispatch(setSong(songs))
  }
})

export default connect(null, mapDispatchToProps)(Album)
