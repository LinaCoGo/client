import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Drizz from '../screens/Drizz';
import Account from '../screens/Account';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen
              name='drizz'
              component={ Drizz }
              options={{title: 'Drizz'}}
          />
           <Tab.Screen
              name='account'
              component={Account}
              options={{title: 'Account'}}
          />
           <Tab.Screen
              name='profile'
              component={Profile}
              options={{title: 'Profile'}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
