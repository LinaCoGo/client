import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';
import AccountStack from './AccountStack';
import DrizzStack from './DrizzStack';

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='drizz'
        screenOptions={{
          tabBarActiveTintColor:'#a17dc3',
          tabBarInactiveTintColor:'#442484'
        }}
      >
          <Tab.Screen
              name='drizz'
              component={ DrizzStack }
              options={{
                title: 'Drizz',
                headerShown: false,
              tabBarIcon: ({color, size})=> (
                <Ionicons name='home' color={color} size={size}/>
              )}}
          />
           <Tab.Screen
              name='search'
              component={SearchStack}
              options={{title: 'Search',
              headerShown: false,
              tabBarIcon: ({color, size})=> (
                <Ionicons name='search' color={color} size={size}/>
              )}}
          />
           <Tab.Screen
              name='profile'
              component={ProfileStack}
              options={{title: 'Profile',
              headerShown: false,
              tabBarIcon: ({color, size})=> (
                <Ionicons name='person' color={color} size={size}/>
              )}}
          />
           <Tab.Screen
              name='account'
              component={AccountStack}
              options={{title: 'Account',
              headerShown: false,
              tabBarIcon: ({color, size})=> (
                <Ionicons name='person' color={color} size={size}/>
              )}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
