import React from 'react'
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native'

import store from '../store'

const Row = props => {
    let { navigation, item, horizontal, drag, cancel, onRemove, style } = props
    let { source, name, place, type } = item

    let state = store.getState()

    return (
        <TouchableOpacity
            style={[
                { flexDirection: horizontal ? 'row' : 'column' },
                styles.container,
                style
            ]}
            onPress={() => navigation.navigate("Detail", { item })}
            onLongPress={drag}
        >
            <Image
                source={source}
                style={styles.image}
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{place}</Text>
                <Text style={styles.desc}>{type}</Text>
            </View>
            {cancel ? <TouchableOpacity onPress={() => onRemove(name, state.user)}>
                <Image
                    source={require('../assets/images/cancel.png')}
                    style={styles.cancel}
                />
            </TouchableOpacity> : null}
        </TouchableOpacity>
    )
}

var styles = StyleSheet.create({
    container: {
        height: 150,
        margin: 4,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        height: 130,
        width: 130,
        margin: 10,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 5
    },
    subtitle: {
        marginVertical: 5
    },
    desc: {
        marginVertical: 5,
        color: '#00875b'
    },
    cancel: {
        height: 30,
        width: 30
    }
})

export default Row