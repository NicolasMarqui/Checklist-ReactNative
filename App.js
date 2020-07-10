import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Quicksand_400Regular, Quicksand_700Bold, useFonts } from '@expo-google-fonts/quicksand';

import Navigation from './src/Navigation';

export default function App() {

  let [fontsLoaded] = useFonts({
	Quicksand_400Regular,
	Quicksand_700Bold
  });

  if(!fontsLoaded){
    return <Text>Loading</Text>
  }else{
	return (
		<NavigationContainer>
		  <Navigation />
		</NavigationContainer>
	);
  }
}
