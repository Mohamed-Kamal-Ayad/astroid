export type QuestionType = {
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

export const questions: QuestionType[] = [
  {
    question: 'What type of exoplanet is WASP-159 b?',
    options: ['Terrestrial', 'Ice Giant', 'Gas Giant', 'Rocky Planet'],
    correctAnswerIndex: 2,
  },
  {
    question: 'In what year was WASP-159 b discovered?',
    options: ['2010', '2015', '2018', '2020'],
    correctAnswerIndex: 2,
  },
];
