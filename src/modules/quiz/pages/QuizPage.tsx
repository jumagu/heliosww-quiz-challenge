import { FormEvent, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

import Answer from '../components/Answer';
import useQuizStore from '../store/quiz.store';
import type { FormattedQuestion } from '../interfaces/quiz.interface';
import usePreventReload from '@/modules/shared/hooks/usePreventReload';

export default function QuizPage() {
  const navigate = useNavigate();

  const questions = useQuizStore((state) => state.questions);
  const setFinished = useQuizStore((state) => state.setFinished);
  const increaseScore = useQuizStore((state) => state.increaseScore);

  const [questionCount, setQuestionCount] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<FormattedQuestion | null>(null);

  const submitAnswerHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedAnswer === currentQuestion?.correctAnswer) {
      increaseScore();
    }
    if (questionCount === 10) {
      setFinished();
      navigate('/score', { replace: true });
      return;
    }
    setSelectedAnswer(null);
    setQuestionCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (questions !== null) {
      setCurrentQuestion(questions[questionCount - 1]);
    }
  }, [questions, questionCount]);

  usePreventReload(); // Prevent page refresh

  if (questions === null) return <Navigate to="/" replace />;

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center bg-secondary bg-shape-qz-primary bg-no-repeat animate-fade-in">
      <div className="flex justify-center md:fixed right-0 top-0 mt-8 md:mr-10">
        <img src="images/forgel-filled.svg" alt="Forgel Logo" />
      </div>

      <main className="size-full flex items-center py-8">
        <h1 className="sr-only">Quiz</h1>

        <section className="mx-auto px-4 max-w-4xl">
          <h2 className="mb-5 text-primary font-bebas text-6xl lg:text-8xl text-center">
            Question {questionCount}/10
          </h2>
          <p className="mb-12 text-primary font-sora text-xl lg:text-4xl text-center select-none">
            {currentQuestion?.question}
          </p>

          <form className="max-w-2xl mx-auto" onSubmit={submitAnswerHandler}>
            <fieldset className="appearance-none flex flex-col gap-3.5">
              <legend className="sr-only">Select the correct answer.</legend>
              {currentQuestion?.answers.map((answer) => (
                <Answer
                  key={answer.option}
                  {...answer}
                  selected={answer.option === selectedAnswer}
                  onChange={setSelectedAnswer}
                />
              ))}
              <button
                type="submit"
                disabled={!selectedAnswer}
                className="group mx-auto mt-4 px-4 lg:px-8 py-2 lg:py-4 w-fit bg-primary disabled:bg-base-200 transition-colors"
              >
                <span className="font-sora text-xl lg:text-3xl text-base-100 group-disabled:text-base-300 transition-colors">
                  Next
                </span>
              </button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
}
