import { combineReducers } from "redux"
import track from './track'
import user from './user'

export default combineReducers({
    track,
    user
})

// state object:-
// {
//     user1: [
//         {trackedEvent1},
//         {trackedEvent2}
//     ],
//     user2: [
//         {trackedEvent1},
//         {trackedEvent2}
//     ]
// }