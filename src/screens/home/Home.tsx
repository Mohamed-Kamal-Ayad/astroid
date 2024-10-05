import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import type { RootStackParamList } from '@/navigation';
import { ScrollView } from '@/ui';

import { EventSlider } from './EventSlider';
import { Explorations } from './Explorations';
import { Header } from './Header';
import { Topics } from './Topics';
import { Tracker } from './Tracker';

export const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <ImageBackground
      source={require('@/ui/images/background.png')}
      style={style.cover}
    >
      <Header />

      <ScrollView className="my-2 px-6">
        <EventSlider />
        <Explorations navigation={navigation} />
        <Tracker />
        <Topics />
      </ScrollView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  cover: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
