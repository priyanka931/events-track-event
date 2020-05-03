import React from 'react'

// react-navigation imports
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

// redux imports
import { Provider } from 'react-redux'

import AppComponent from './components/App'
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppComponent />
            </NavigationContainer>
        </Provider>
    )
}

export default App
