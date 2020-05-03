import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

import Row from '../components/Row'
import store from '../store'

const TrackingScreen = props => {
    let { onPress, navigation, onModify, onRemove, data } = props
    let state = store.getState()
    let array = []

    let filterData = data && data.filter(item => {
        if(!array.includes(item.name)) {
            array.push(item.name)
            return true
        }

        return false
    })

    return (
        <View style={styles.container}>
            <DraggableFlatList
                data={filterData || []}
                renderItem={({item, drag}) => {
                    let rowProps = {
                        onRemove,
                        navigation,
                        cancel: true,
                        horizontal: true,
                        item,
                        onPress,
                        drag
                    }

                    return <Row {...rowProps} />
                }}
                keyExtractor={item => item.name}
                onDragEnd={({data}) => onModify(data, state.user)}
            />
            <View style={styles.signOut}>
                <Button
                    title={'SignOut'}
                    color={'white'}
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
    signOut: {
        backgroundColor: '#5bc27a',
        borderRadius: 20,
        bottom: 20,
        marginVertical: 30
    }
})

export default TrackingScreen