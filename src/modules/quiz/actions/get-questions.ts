import { isAxiosError } from 'axios';

import quizApi from '@/apis/quiz.api';
import formatQuestions from '../helpers/format-questions.helper';
import type {
  Question,
  Category,
  Difficulty,
  FormattedQuestion,
} from '../interfaces/quiz.interface';

type GetQuestionsConfig = {
  category?: Category;
  difficulty?: Difficulty;
  limit?: number;
  tags?: string; // Linux,bash,terminal
};

const getQuestions = async (config?: GetQuestionsConfig): Promise<FormattedQuestion[]> => {
  try {
    const res = await quizApi.get<Question[]>('/questions', {
      params: {
        category: config?.category,
        difficulty: config?.difficulty,
        limit: config?.limit,
        tags: config?.tags,
      },
    });

    if (res.status !== 200) throw new Error('Something went wrong, please try again later.');

    return formatQuestions(res.data);
  } catch (error) {
    if (isAxiosError(error) && error.response !== undefined) {
      if (error.response.status === 429) {
        throw new Error('Calm down! Too many requests.');
      } else {
        // Other cases: 401, 404, 500
        throw new Error('An error occurred while creating the quiz, please contact support.');
      }
    } else if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('Internal server error, please contact support.');
    }
  }
};

export default getQuestions;
