import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Drizz from '../screens/Drizz';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Account from '../screens/account/Account';

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='drizz'
        tabBarOptions={{
          inactiveTintColor:'#a17dc3',
          activeTintColor:'#442484'
        }}
      >
          <Tab.Screen
              name='drizz'
              component={ Drizz }
              options={{title: 'Drizz',
              tabBarIcon: ({color, size})=> (
                <Ionicons name='home' color={color} size={size}/>
              )}}
          />
           <Tab.Screen
              name='search'
              component={Search}
              options={{title: 'Search',
              tabBarIcon: ({color, size})=> (
                <Ionicons name='search' color={color} size={size}/>
              )}}
          />
           <Tab.Screen
              name='profile'
              component={Profile}
              options={{title: 'Profile',
              tabBarIcon: ({color, size})=> (
                <Ionicons name='person' color={color} size={size}/>
              )}}
          />
           <Tab.Screen
              name='account'
              component={Account}
              options={{title: 'Account',
              tabBarIcon: ({color, size})=> (
                <Ionicons name='person' color={color} size={size}/>
              )}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
