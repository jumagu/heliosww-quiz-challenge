import { useState } from 'react';
import { useNavigate } from 'react-router';

import { toast } from 'sonner';
import { LoaderIcon, ArrowRightIcon } from 'lucide-react';

import useQuizStore from '../store/quiz.store';
import getQuestions from '../actions/get-questions';
import { Difficulty } from '../interfaces/quiz.interface';

export default function HomePage() {
  const navigate = useNavigate();

  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const setQuestions = useQuizStore((state) => state.setQuestions);

  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  const startQuizHandler = async () => {
    try {
      resetQuiz();
      setIsLoadingQuestions(true);

      const questions = await getQuestions({
        category: 'React',
        difficulty: Difficulty.Medium,
        limit: 10,
      });

      setQuestions(questions);

      navigate('/quiz', { replace: true });
    } catch (error) {
      setIsLoadingQuestions(false);
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center bg-primary bg-shape-home bg-cover bg-no-repeat animate-fade-in">
      <main className="ml-auto sm:mr-[10%] px-4 md:px-0">
        <h1 className="font-bebas text-8xl sm:text-10xl md:text-12xl text-base-100">Quizzler</h1>

        <section className="flex mb-10 -mt-4">
          <h2 className="sr-only">By: Forgel</h2>
          <div className="flex ml-auto gap-2">
            <span className="font-sora text-sm text-base-100">BY:</span>
            <img src="images/forgel-outlined.svg" alt="Forgel Logo" />
          </div>
        </section>

        <section className="flex">
          <div className="ml-auto animate-underline left">
            <button type="button" className="flex items-center gap-2" onClick={startQuizHandler}>
              <span className="font-sora text-xl sm:text-3xl text-base-100">
                Let&rsquo;s start the quiz
              </span>
              <span aria-hidden="true">
                {isLoadingQuestions ? (
                  <LoaderIcon className="text-base-100 animate-spin" />
                ) : (
                  <ArrowRightIcon className="text-base-100" />
                )}
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
