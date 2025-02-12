export interface Question {
  id: number;
  question: string;
  description: string | null;
  answers: Answers;
  multiple_correct_answers: string;
  correct_answers: CorrectAnswers;
  correct_answer: string | null;
  explanation: string | null;
  tip: string | null;
  tags: Tag[];
  category: Category;
  difficulty: Difficulty;
}

export interface Answers {
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  answer_f: string | null;
}

export interface CorrectAnswers {
  answer_a_correct: string;
  answer_b_correct: string;
  answer_c_correct: string;
  answer_d_correct: string;
  answer_e_correct: string;
  answer_f_correct: string;
}

export enum Difficulty {
  Easy = 'Easy',
  Hard = 'Hard',
  Medium = 'Medium',
}

export interface Tag {
  name: string;
}

export type Category =
  | 'Linux'
  | 'bash'
  | 'uncategorized'
  | 'Docker'
  | 'SQL'
  | 'CMS'
  | 'Code'
  | 'DevOps'
  | 'React'
  | 'Laravel'
  | 'Postgres'
  | 'Django'
  | 'cPanel'
  | 'NodeJs'
  | 'WordPress'
  | 'Next.js'
  | 'VueJS'
  | 'Apache Kafka';

export type AnswerOption = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export interface FormattedAnswer {
  option: AnswerOption;
  answer: string;
}

export interface FormattedQuestion {
  id: number;
  question: string;
  answers: FormattedAnswer[];
  correctAnswer: AnswerOption;
}
