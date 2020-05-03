import { connect } from "react-redux"

import Login from '../screens/Login'
import { addUser } from '../actions'

const mapDispatchToProps = dispatch => ({
    onSubmit: val => {
        dispatch(addUser(val))
    }
})

export default connect(null, mapDispatchToProps)(Login)