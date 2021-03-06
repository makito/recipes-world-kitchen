import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FavoritesScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
