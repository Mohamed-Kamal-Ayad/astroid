import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';

import type { RootStackParamList } from '@/navigation';
import { LeftArrowIcon, ScrollView, TouchableOpacity, View } from '@/ui';

import { explorations } from '../home/data/explorations';

type Props = NativeStackScreenProps<RootStackParamList, 'PlanetExplore'>;

export const PlanetExplore = ({ route, navigation }: Props) => {
  const { id } = route.params;

  const planet = explorations.find(item => item.id === id);

  const { height } = Dimensions.get('screen');

  if (!planet) return <></>;

  return (
    <ImageBackground
      source={require('@/ui/images/background.png')}
      style={style.cover}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <View style={{ paddingTop: (StatusBar.currentHeight ?? 0) + 16 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-6 flex flex-row items-center justify-between px-6">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrowIcon color="white" />
            </TouchableOpacity>
          </View>

          <WebView
            source={{ uri: 'https://eyes.nasa.gov/apps/exo/#/planet/K2-255_b' }}
            style={{ flex: 1, height: height, width: '100%' }}
          />
        </ScrollView>
      </View>
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
