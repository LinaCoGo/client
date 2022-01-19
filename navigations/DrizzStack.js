import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Drizz from '../screens/Drizz';

const Stack = createStackNavigator();

export default function DrizzStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Drizz'
                component={Drizz}
                // options={{title: 'Drizz'}}
                >
            </Stack.Screen>
        </Stack.Navigator>
    )
}