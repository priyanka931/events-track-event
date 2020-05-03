import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

import DetailScreen from '../screens/Detail'
import EventsScreen from '../screens/Events'
import LoginScreen from '../containers/Login'
import TrackingScreen from '../containers/Tracking'

const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Events" component={EventsScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    )
}

const Home = () => {
    return (
        <Drawer.Navigator drawerPosition={'right'}>
            <Drawer.Screen name="Events" component={Main} />
            <Drawer.Screen name="Tracked Events" component={TrackingScreen} />
        </Drawer.Navigator>
    )
}

export default App = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
