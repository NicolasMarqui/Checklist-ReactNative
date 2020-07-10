import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Pages/Login';
import Home from './Pages/Home';

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Navigation;