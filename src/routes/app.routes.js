import Home from '../view/homeView'
import YourBooks from '../view/yourBooksView'
import notification from '../view/notificationView'
import user from '../view/userView'

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'

const Tabs = createBottomTabNavigator();
const AppStack = createStackNavigator();

const icons = {
    Início: {
        name: 'home'
    },
    Biblioteca:{
        name: 'bookmark'
    },
    Avisos:{
        name: 'bell'
    },
    Perfil:{
        name: 'user'
    }
}

export default function AppRoutes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Início">
                <AppStack.Screen name="Início" component={TabNav} options={{ headerShown: false}}/>
                <AppStack.Screen name="Biblioteca" component={TabNav} options={{ headerShown: false}}/>
                <AppStack.Screen name="Avisos" component={TabNav} options={{ headerShown: false}}/>
                <AppStack.Screen name="Perfil" component={TabNav} options={{ headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

function TabNav(){
    return(
        <Tabs.Navigator
        initialRouteName="Início" 
      screenOptions={({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const {name} = icons[route.name]
          return <Feather name={name} color={color} size={25}/>
        }
      })}
      tabBarOptions={{
        style:{
          height: 55,
          position: 'absolute',
          backgroundColor: '#8CA5FF',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#000',

      }}>
            <Tabs.Screen name="Início" component={Home}/>
            <Tabs.Screen name="Biblioteca" component={YourBooks}/>
            <Tabs.Screen name="Avisos" component={notification}/>
            <Tabs.Screen name="Perfil" component={user}/>
        </Tabs.Navigator>
    )
}
