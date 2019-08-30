import { connect } from 'react-redux'
import { changeSong, setSong, setHistory } from '../redux/actions'
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
    dispatch(changeSong(song))
  },
  setSongs: (song) => {
    dispatch(setSong(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)