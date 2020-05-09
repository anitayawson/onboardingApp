import React from 'react'
import { Text } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen'
import AddToCartScreen from './src/screens/AddToCartScreen'
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitle: "Neets Store",
        headerStyle: {
          backgroundColor: "#873756",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerRight:()=>(<Entypo name="menu" style={{color: "white", marginRight: 15}} size={25}/>)
      }}
      >
        <Stack.Screen name="OnlineShopping" component={OnlineShoppingScreen} />
        <Stack.Screen name="AddToCart" component={AddToCartScreen} />
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessfulScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
