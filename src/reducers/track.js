const trackEvents = ( state={}, action ) => {
    switch (action.type) {
        case "ADD_TRACK_EVENT": {
            let event = state[action.user] ? [...state[action.user], action.item] : [action.item]

            return Object.assign({}, state, {
                [action.user]: event
            })
        }

        case "REMOVE_TRACK_EVENT": {
            let events = [...state[action.user]]
            events = events.filter(event => event.name !== action.name)

            return Object.assign({}, state, {
                [action.user]: events
            })
        }

        case "MODIFY_TRACK_EVENT":{
            return Object.assign({}, state, {
                [action.user]: action.data
            })
        }
            
        default:
            return state
    }
}

export default trackEvents