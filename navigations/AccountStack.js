import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/account/Account';
import Login from '../screens/account/Login';
import Register from '../screens/account/Register';

const Stack = createStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Account'
                component={Account}
                >
            </Stack.Screen>
            <Stack.Screen
                name='login'
                component={Login}
                options={{title: 'Log In' }}
                >
            </Stack.Screen>
            <Stack.Screen
                name='register'
                component={Register}
                options={{title: 'Register User' }}
                >
            </Stack.Screen>
        </Stack.Navigator>
    )
}
