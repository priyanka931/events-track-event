import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Row from './Row'

const GridView = ({data, navigation}) => {
    let { name } = data

    return (
        <ScrollView>
            <View key={name} style={styles.container}>
                {
                    data.map(item => {
                        let rowProps = {
                            navigation,
                            item,
                            horizontal: false
                        }

                        return (
                            <Row key={name} style={styles.row} {...rowProps} />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        width: '48%',
        height: 250
    }
})

export default GridView