import { connect } from 'react-redux'
import { setSkin } from '../redux/actions'
import Skin from '../components/Skin'

const mapStateToProps = (state) => ({
  currentSkin: state.skin
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentSkin: (skin) => {
    dispatch(setSkin(skin))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Skin)