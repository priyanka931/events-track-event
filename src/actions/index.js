export const addTrackEvent = (item, user) => ({
    type: "ADD_TRACK_EVENT",
    item,
    user
})

export const removeTrackEvent = (name, user) => ({
    type: "REMOVE_TRACK_EVENT",
    name,
    user
})

export const modifyTrackEvent = (data, user) => ({
    type: "MODIFY_TRACK_EVENT",
    data,
    user
})

export const addUser = name => ({
    type: "ADD_USER",
    name
})