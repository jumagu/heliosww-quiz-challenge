import { create } from 'zustand';

import type { FormattedQuestion } from '../interfaces/quiz.interface';

interface QuizState {
  questions: FormattedQuestion[] | null;
  finished: boolean;
  score: number;
  setQuestions: (questions: FormattedQuestion[]) => void;
  setFinished: () => void;
  increaseScore: () => void;
  resetQuiz: () => void;
}

const useQuizStore = create<QuizState>()((set) => ({
  questions: null,
  finished: false,
  score: 0,
  setQuestions: (questions) => set({ questions }),
  setFinished: () => set({ finished: true }),
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetQuiz: () => set({ questions: null, finished: false, score: 0 }),
}));

export default useQuizStore;
