import { connect } from 'react-redux'

const mapDispacthFromProps = dispatch => ({
    onSignOut: () => dispatch(signOut())
})

export default connect(null, mapDispacthFromProps)(SignOut)