import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APIProvider } from '@/api';
import { hydrateAuth } from '@/core';
import { loadSelectedTheme } from '@/hooks/useSelectedTheme';

import { RootNavigator } from './navigation';

hydrateAuth();
loadSelectedTheme();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <APIProvider>
        <RootNavigator />
        <FlashMessage position="top" />
      </APIProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
