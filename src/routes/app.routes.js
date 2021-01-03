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
    Home: {
        name: 'home'
    },
    YourBooks:{
        name: 'bookmark'
    },
    newBook:{
        name: 'plus-circle'
    },
    notification:{
        name: 'bell'
    },
    user:{
        name: 'user'
    }
}

export default function AppRoutes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Home">
                <AppStack.Screen name="Home" component={TabNav} options={{ headerShown: false}}/>
                <AppStack.Screen name="YourBooks" component={TabNav} options={{ headerShown: false}}/>
                <AppStack.Screen name="notification" component={TabNav} options={{ headerShown: false}}/>
                <AppStack.Screen name="user" component={TabNav} options={{ headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

function TabNav(){
    return(
        <Tabs.Navigator
        initialRouteName="Home" 
      screenOptions={({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const {name} = icons[route.name]
          return <Feather name={name} color={color} size={30}/>
        }
      })}
      tabBarOptions={{
        style:{
          height: 50,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: 'absolute',
          backgroundColor: '#8CA5FF'
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#000',
        showLabel: false
      
      }}>
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="YourBooks" component={YourBooks}/>
            <Tabs.Screen name="notification" component={notification}/>
            <Tabs.Screen name="user" component={user}/>
        </Tabs.Navigator>
    )
}
