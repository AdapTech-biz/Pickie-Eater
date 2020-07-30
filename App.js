import React from 'react';
import {AppLoading} from 'expo';
import { useFonts, SpectralSC_400Regular, } from '@expo-google-fonts/spectral-sc';

import HomeScreen from './screens/HomeScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    SpectralSC_400Regular,
    Red_Rose: require('./assets/fonts/RedRose/RedRose-Light.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <HomeScreen />
  );

}


