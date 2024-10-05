/* eslint-disable max-lines-per-function */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';

import type { RootStackParamList } from '@/navigation';
import { Button, Text, TimerIcon, TouchableOpacity, View } from '@/ui';

import { questions } from './data/questions';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizQuestions'>;

const QuizTimer = ({
  time,
  onFinish,
}: {
  time: number;
  onFinish: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(time);

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  });

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View className="mb-6 flex flex-row items-center justify-start">
      <TimerIcon color="white" />

      <Text className="ml-4 text-base font-bold text-white">
        {minutes}:{seconds}
      </Text>
    </View>
  );
};

export const QuizQuestions = ({ navigation }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('QuizFinish', { score, total: questions.length });
    }
  };

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
        <QuizTimer
          time={5 * 60 - 1}
          onFinish={() => {
            navigation.navigate('QuizFinish', {
              score,
              total: questions.length,
            });
          }}
        />

        <View className="mt-8">
          <Text className="text-center text-base font-bold text-[#48CAE4]">
            Questions {currentQuestionIndex + 1} of {questions.length}
          </Text>

          <Text className="mt-4 w-[75%] self-center text-center text-lg font-bold text-white">
            {currentQuestion.question}
          </Text>

          <View className="my-8 space-y-4">
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswerSelection(index)}
                style={{
                  backgroundColor:
                    selectedAnswer === index ? '#0E1438' : 'white',
                }}
                className="rounded-3xl border-2 border-white py-4"
              >
                <Text
                  className="text-center text-lg font-bold"
                  style={{
                    color: selectedAnswer === index ? 'white' : 'black',
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            label="Next"
            variant="outline"
            disabled={selectedAnswer === null}
            onPress={handleNextQuestion}
          />
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
