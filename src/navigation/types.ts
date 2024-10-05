import type { RouteProp as NRouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Onboarding: undefined;
  App: undefined;
  Planet: { id: number };
  PlanetExplore: { id: number };
  Quiz: undefined;
  QuizWeek: undefined;
  QuizQuestions: undefined;
  QuizFinish: { score: number; total: number };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;
