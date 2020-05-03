import React from 'react'
import { Button } from 'react-native'

const Detail = ({ addTrack }) => {
    return (
        <Button
            title="Track this Event"
            onPress={() => addTrack()}
        />
    )
}

export default Detail