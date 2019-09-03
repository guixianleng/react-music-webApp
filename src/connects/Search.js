import { connect } from 'react-redux'
import { setCurrentSong, setSongs, setHistory } from '../redux/actions'
import Search from '../views/search'

const mapStateToProps = (state) => ({
  historyList: state.historySearch
})

const mapDispatchToProps = (dispatch) => ({
  // 历史搜索
  setHistory: (keyword, add) => {
    dispatch(setHistory(keyword, add))
  },
  changeCurrentSong: (song) => {
    dispatch(setCurrentSong(song))
  },
  setSongs: (song) => {
    dispatch(setSongs(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)