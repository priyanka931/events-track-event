import Detail from '../components/Detail'
import { connect } from 'react-redux'

import { addTrackEvent } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    addTrack: () => {
        dispatch(addTrackEvent(props.item, props.user))
    }
})

export default connect(null, mapDispatchToProps)(Detail)