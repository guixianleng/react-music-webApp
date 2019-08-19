import { connect } from 'react-redux'
import { setSkin } from '../redux/actions'
import Skin from "../components/Skin"

const stateToProps = (state) => ({
  currentSkin: state.skin
})

const dispatchToProps = (dispatch) => ({
  setSkin: (skin) => {
    dispatch(setSkin(skin))
  }
})

export default connect(stateToProps, dispatchToProps)(Skin)