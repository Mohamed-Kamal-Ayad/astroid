import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import type { RootStackParamList } from '@/navigation';
import {
  ArrowDownIcon,
  Image,
  LeftArrowIcon,
  LineBellIcon,
  PlayIcon,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/ui';
import { Heading } from '@/ui/Heading';

import { explorations } from '../home/data/explorations';

type Props = NativeStackScreenProps<RootStackParamList, 'Planet'>;

const PlanetDescription = ({
  id,
  navigation,
}: {
  id: number;
  navigation: Props['navigation'];
}) => {
  const { width } = Dimensions.get('screen');

  return (
    <View className="flex flex-col items-center gap-2">
      <View style={{ position: 'relative' }}>
        <Image
          source={require('@/ui/images/planet.png')}
          style={{
            width: 200,
            height: 200,
          }}
        />

        <TouchableOpacity
          style={style.playContainer}
          onPress={() => navigation.navigate('PlanetExplore', { id })}
        >
          <View className="rounded-full bg-[#0E1438] p-3">
            <PlayIcon color="white" />
          </View>
        </TouchableOpacity>
      </View>

      <View
        className="rounded-3xl bg-[#1D3E62] p-3"
        style={{ width: width * 0.54 }}
      >
        <Text className="text-[10px] text-white">
          Click the “Play Button” to start simulation.
        </Text>
      </View>

      <View>
        <Text className="text-sm text-white">
          <Text className="text-sm text-[#48CAE4]">Hypatia</Text> is an
          exoplanet orbiting the star HD 192263, located about 65 light-years
          from Earth in the constellation of Aquila.
        </Text>
      </View>
    </View>
  );
};

const PlanetVideo = () => {
  return (
    <View className="mt-6">
      <Heading title="Exoplanets Character" />

      <View className="mt-4 rounded-3xl bg-[#0E1438] p-4">
        <View className="mb-3 flex flex-row items-center justify-start gap-2">
          <TouchableOpacity className="rounded-full bg-white p-2">
            <ArrowDownIcon />
          </TouchableOpacity>
          <Text className="text-sm font-semibold text-white">
            Download the video
          </Text>
        </View>

        <YoutubePlayer height={200} videoId={'DMZ5WFRbSTc'} />
      </View>
    </View>
  );
};

const PlanetQuiz = ({ navigation }: { navigation: Props['navigation'] }) => {
  return (
    <View className="mt-4 pb-4">
      <Heading title="Quizzes" />

      <View className="mt-4 rounded-3xl bg-[#0E1438] p-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-sm text-white">Quiz 1</Text>
          <TouchableOpacity
            className="rounded-full bg-[#1D3E62]"
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text className="p-2 text-sm text-white">Start the quiz</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-between space-y-4">
          <Text className="text-sm text-white">Quiz 2</Text>
          <TouchableOpacity
            className="rounded-full bg-[#1D3E62]"
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text className="p-2 text-sm text-white">Start the quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Planet = ({ route, navigation }: Props) => {
  const { id } = route.params;

  const planet = explorations.find(item => item.id === id);

  if (!planet) return <></>;

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

            <Text className="text-2xl font-bold text-white">{planet.name}</Text>

            <TouchableOpacity>
              <LineBellIcon color="white" />
            </TouchableOpacity>
          </View>

          <PlanetDescription id={id} navigation={navigation} />

          <PlanetVideo />

          <PlanetQuiz navigation={navigation} />
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
  playContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
});
