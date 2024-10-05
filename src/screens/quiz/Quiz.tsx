import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';

import type { RootStackParamList } from '@/navigation';
import {
  Button,
  Image,
  LeftArrowIcon,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export const Quiz = ({ navigation }: { navigation: Props['navigation'] }) => {
  return (
    <ImageBackground
      source={require('@/ui/images/background.png')}
      style={style.cover}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <View style={{ paddingTop: (StatusBar.currentHeight ?? 0) + 16 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-6 flex flex-row items-center justify-end px-6">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrowIcon color="white" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-col items-center justify-center p-4">
            <Text className="mb-4 text-center text-2xl font-bold text-white">
              Be Ready
            </Text>
            <Text className="mb-24 w-64 text-center text-white">
              1,000+ quizzes to challenge you and your friends on all topics
            </Text>

            <Image
              source={require('@/ui/images/planet.png')}
              style={{ height: 200, width: 200 }}
              className="mb-24"
            />

            <Button
              label="Start Playing"
              containerClassName="w-full"
              labelClassName="text-base text-white font-bold"
              onPress={() => navigation.navigate('QuizWeek')}
            />
          </View>
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
