import React from 'react'
import { View, Button, TextInput, StyleSheet, Image } from 'react-native'

const LoginScreen = ({ navigation, onSubmit }) => {
    const [value, onChangeText] = React.useState('')

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/events.jpg')} />
            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder={'Enter your Name'}
                    value={value}
                />
                <View style={styles.button}>
                <Button
                    title="Login"
                    color={'white'}
                    onPress={() => {
                        if (value === '') {
                            alert('Kindly Fill your Name')
                            return
                        }

                        onSubmit(value)
                        navigation.navigate('Home')
                    }}
                />
                </View>
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
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    card: {
        width: '80%',
        height: '40%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        padding: 30,
        shadowOffset: {
            width: 0, 
            height: 0
        }
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor: '#c4c4c4',
        marginBottom: 30
    },
    button: {
        backgroundColor: '#5bc27a',
        borderRadius: 20
    }
})

export default LoginScreen