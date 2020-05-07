import React, { Component } from 'react'
import {View, Text} from 'react-native'
import OnlineShoppingScreen from './components/OnlineShoppingScreen'
import AddToCartScreen from './components/AddToCartScreen'
import PaymentSuccessfulScreen from './components/PaymentSuccessfulScreen'

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <OnlineShoppingScreen/> */}
        {/* <AddToCartScreen/> */}
        <PaymentSuccessfulScreen/>
      </View>
    )
  }
}
