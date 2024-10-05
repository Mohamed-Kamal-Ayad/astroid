import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';

import type { RootStackParamList } from '@/navigation';
import {
  Button,
  CoinIcon,
  Image,
  LeftArrowIcon,
  LineBellIcon,
  ScrollView,
  SparkIcon,
  Text,
  TouchableOpacity,
  View,
} from '@/ui';
import { SkullIcon } from '@/ui/icons/SkullIcon';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizWeek'>;

const QuizFeature = ({
  title,
  icon,
  center,
}: {
  title: string;
  icon: ReactNode;
  center?: boolean;
}) => {
  return (
    <View className="mx-1.5 flex w-[29%] flex-col items-center justify-center space-y-2 rounded-3xl bg-white p-3">
      {icon}
      <Text
        style={{
          color: center ? 'black' : '#8F939A',
        }}
        className="text-[10px] font-semibold"
      >
        {title}
      </Text>
    </View>
  );
};

const QuizFeatures = () => (
  <View className="flex flex-row justify-between">
    <QuizFeature title="10 Questions" icon={<SparkIcon color="#8F939A" />} />
    <QuizFeature title="+100 Points" center icon={<CoinIcon color="black" />} />
    <QuizFeature title="3 Lives" icon={<SkullIcon color="#8F939A" />} />
  </View>
);

const QuizActions = ({ navigation }: Pick<Props, 'navigation'>) => (
  <View className="mt-6 flex flex-row justify-center space-x-6">
    <Button
      label="Play Solo"
      variant="outline"
      onPress={() => navigation.navigate('QuizQuestions')}
    />
    <Button label="Challenge Friends" />
  </View>
);

export const QuizWeek = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require('@/ui/images/background.png')}
      style={style.cover}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <View
        className="px-6"
        style={{ paddingTop: (StatusBar.currentHeight ?? 0) + 16 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-6 flex flex-row items-center justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrowIcon color="white" />
            </TouchableOpacity>

            <Text className="text-2xl font-bold text-white">
              Quiz of the week
            </Text>

            <TouchableOpacity>
              <LineBellIcon color="white" />
            </TouchableOpacity>
          </View>

          <View className="items-center rounded-3xl bg-[#0E1438] p-6">
            <Image
              source={require('@/ui/images/planet.png')}
              style={{ height: 120, width: 120 }}
            />
          </View>

          <View className="mt-6">
            <Text className="mb-4 text-xl font-semibold text-white">
              Quiz 1
            </Text>

            <QuizFeatures />

            <Text className="mt-6 text-white">
              Become the best and fastest player of quiz of the week worldwide
              and win{' '}
              <Text className="font-bold text-[#48CAE4]">100 point!</Text>
            </Text>

            <Text className="mt-6 text-white">
              This quiz is about Hypatia exoplanet for new learner. Challenge
              yourself and your friends!!!
            </Text>
          </View>

          <QuizActions navigation={navigation} />
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
