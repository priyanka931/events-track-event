import React from 'react'
import { View, FlatList, Button, StyleSheet, Switch, Text } from 'react-native'

import data from '../assets/data'
import Row from '../components/Row'
import GridView from '../components/GridView'

const EventsScreen = ({ navigation }) => {
    const [mode, onModeChange] = React.useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.switchView}>
                <Text style={styles.text}>{'List'}</Text>
                <Switch
                    style={styles.switch}
                    onValueChange={() => onModeChange(!mode)}
                    value={mode}
                />
                <Text style={styles.text}>{'Grid'}</Text>
            </View>
            {!mode ? <FlatList
                    data={data}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        let rowProps = {
                            navigation,
                            item,
                            horizontal: true
                        }

                        return <Row {...rowProps} />
                    }}
                /> : <GridView data={data} navigation={navigation} />
            }
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
        flex: 1
    },
    switchView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    switch: {
        marginHorizontal: 10,
        transform: [{ scaleX: .6 }, { scaleY: .6 }]
    },
    signOut: {
        backgroundColor: '#5bc27a',
        borderRadius: 20,
        alignSelf: 'center',
        width: '95%',
        marginVertical: 10
    },
    text: {
        fontSize: 16
    }
})

export default EventsScreen
