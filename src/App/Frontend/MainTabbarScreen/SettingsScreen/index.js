import SettingsScreen from './SettingsScreen'
import { connect } from 'react-redux'
import * as mapActionsToProps from './actions'

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps, mapActionsToProps)(SettingsScreen)
