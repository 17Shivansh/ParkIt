import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
        <Tab.Screen name='home' 
        component={HomeScreen}
        options={{
            tabBarLabel:'Search',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon:({Color, size })=>(
                <FontAwesome5 name="search-location" size={size} color={Color} />

            )

            
           

            }}/>

          <Tab.Screen name='favorite' 
        component={FavoriteScreen}
        options={{
            tabBarLabel:'favorite',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon:({Color, size })=>(
                <AntDesign name="heart" size={size} color={Color} />

            )

            
           

            }}
        />
        
          <Tab.Screen name='profile' 
        component={ProfileScreen}
        options={{
            tabBarLabel:'profile',
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon:({Color, size })=>(
                <FontAwesome name="user-circle-o" size={size} color={Color} />

            )

            
           

            }}
        />
    </Tab.Navigator>
  )
}