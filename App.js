import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';


import AppLoading from 'expo-app-loading';

import {
  useFonts,
} from '@expo-google-fonts/inter';

import Inter_900Black from './assets/fonts/Pattaya-Regular.ttf';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text style={{ fontFamily: 'Inter_900Black' }}>
        Inter Black
      </Text>

    </View>
  );

}

const Stack = createStackNavigator();

function App() {


  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


}

export default App;


