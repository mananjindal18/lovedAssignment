import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button,useWindowDimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { useAnimatedGestureHandler,useSharedValue,useAnimatedStyle,withSpring } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import BottomSheet from './src/components/BottomSheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopSheet from './src/components/PopSheet';
const Stack = createNativeStackNavigator();
// function HomeScreen({navigation}) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
  
  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={PopSheet}   >
        <Stack.Screen name="Popsheet" component={PopSheet} options={({ navigation }) => ({
title: 'Awesome app'
  })}/>
          {/* <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
title: 'Home app'
  })}/> */}
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App;