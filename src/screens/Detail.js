import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

import Detail from '../containers/Detail.js'
import store from '../store'

const DetailScreen = ({ navigation, route: { params: { item } } }) => {
    let { name, place, type, source } = item
    const state = store.getState()

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={source}
                    style={styles.image}
                />
                <View style={styles.description}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.title}>{place}</Text>
                    <Text style={styles.desc}>{type}</Text>
                </View>
                <Detail item={item} user={state.user} />
            </View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        justifyContent: 'center',
        shadowOffset: {
            width: 0, 
            height: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        padding: 30,
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: '50%',
        borderRadius: 10
    },
    description: {
        flex: 1,
        marginTop: 20
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
    signOut: {
        width: '95%',
        backgroundColor: '#5bc27a',
        borderRadius: 20,
        marginVertical: 30
    }
})

module.exports = DetailScreen