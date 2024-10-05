import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useIsFirstTime } from '@/hooks/useIsFirstTime';
import { Onboarding } from '@/screens';
import { Planet } from '@/screens/planet/Planet';
import { PlanetExplore } from '@/screens/planet/PlanetExplore';
import { Quiz } from '@/screens/quiz/Quiz';
import { QuizFinish } from '@/screens/quiz/QuizFinish';
import { QuizQuestions } from '@/screens/quiz/QuizQuestions';
import { QuizWeek } from '@/screens/quiz/QuizWeek';

import { NavigationContainer } from './NavigationContainer';
import { TabNavigator } from './TabNavigator';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  const [isFirstTime] = useIsFirstTime();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'none',
      }}
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Screen name="App" component={TabNavigator} />
      )}

      <Stack.Screen
        name="Planet"
        component={Planet}
        options={{
          animation: 'fade_from_bottom',
        }}
      />

      <Stack.Screen name="PlanetExplore" component={PlanetExplore} />

      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizWeek" component={QuizWeek} />
      <Stack.Screen
        name="QuizQuestions"
        component={QuizQuestions}
        options={{
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="QuizFinish"
        component={QuizFinish}
        options={{ animation: 'slide_from_left' }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
