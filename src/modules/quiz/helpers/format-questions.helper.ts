import type {
  Question,
  AnswerOption,
  FormattedAnswer,
  FormattedQuestion,
} from '../interfaces/quiz.interface';

const formatQuestions = (rawQuestions: Question[]): FormattedQuestion[] => {
  return rawQuestions.map((q) => {
    const formattedAnswers: FormattedAnswer[] = Object.entries(q.answers)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => ({
        option: key.replace('answer_', '') as AnswerOption,
        answer: value as string,
      }));

    const correctAnswer: AnswerOption = Object.entries(q.correct_answers)
      .find(([, value]) => value === 'true')?.[0]
      .split('_')[1] as AnswerOption;

    return {
      id: q.id,
      question: q.question,
      answers: formattedAnswers,
      correctAnswer: correctAnswer,
    };
  });
};

export default formatQuestions;
