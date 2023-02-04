import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Tabs from './components/Navigation/tab'
import {NavigationContainer} from '@react-navigation/native'

export default function App() {

  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

