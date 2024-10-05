import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';

import type { RootStackParamList } from '@/navigation';
import { CongratsIcon, Text, View } from '@/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizFinish'>;

export const QuizFinish = ({ route, navigation }: Props) => {
  const { score } = route.params;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('App');
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageBackground
      source={require('@/ui/images/background.png')}
      style={style.cover}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <View
        className="h-full px-6"
        style={{ paddingTop: (StatusBar.currentHeight ?? 0) + 16 }}
      >
        <View className="flex h-full flex-col items-center justify-center">
          <CongratsIcon color="white" />

          <Text className="mt-3 text-5xl font-black text-white">Congrats!</Text>
          <Text className="mt-3 text-center text-white">
            You have scored{' '}
            <Text className="font-bold text-[#48CAE4]">
              {score ?? 0} Points
            </Text>
            . In a moments you will be redirected to the leaderboard.
          </Text>
        </View>
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
