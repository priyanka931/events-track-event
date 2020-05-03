import { connect } from 'react-redux'

import TrackingScreen from '../screens/Tracking'
import { modifyTrackEvent, removeTrackEvent } from '../actions'

const mapStateToProps = state => ({
    data: state.track[state.user]
})

const mapDispatchToProps = dispatch => ({
    onModify: (data, user) => {
        dispatch(modifyTrackEvent(data, user))
    },
    onRemove: (name, user) => {
        dispatch(removeTrackEvent(name, user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackingScreen)