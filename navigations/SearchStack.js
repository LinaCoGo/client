import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import search from '../screens/Search';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Search'
                component={Search}
                >
            </Stack.Screen>
        </Stack.Navigator>
    )
}