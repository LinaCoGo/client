import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Profile'
                component={Profile}
                >
            </Stack.Screen>
        </Stack.Navigator>
    )
}