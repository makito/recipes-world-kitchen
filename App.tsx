import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import fonts from './constants/fonts';

const App: FC = () => {

  const [fontsLoaded] = useFonts({
    [fonts.regular]: require('./assets/fonts/OpenSans-Regular.ttf'),
    [fonts.bold]: require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default App;
