import { Link, Navigate } from 'react-router';

import useQuizStore from '../store/quiz.store';

export default function ScorePage() {
  const score = useQuizStore((state) => state.score);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const isQuizFinished = useQuizStore((state) => state.finished);

  if (!isQuizFinished) return <Navigate to="/" replace />;

  return (
    <main className="w-full h-dvh flex flex-col lg:flex-row animate-fade-in">
      <section className="h-[45%] lg:h-full lg:w-[45%] px-4 flex items-center bg-primary bg-shape-resutls bg-no-repeat bg-cover lg:bg-auto">
        <div className="flex flex-col w-fit mx-auto">
          <h1 className="text-right">
            <span className="block font-bebas text-8xl sm:text-9xl md:text-10xl xl:text-11xl 2xl:text-12xl 3xl:text-13xl text-base-100">
              Bravo!
            </span>
            <span className="block font-bebas text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl text-base-100">
              You have scored
            </span>
          </h1>
          <div className="ml-auto animate-underline-off left">
            <Link
              to="/"
              replace
              className="font-sora text-white text-lg lg:text-xl xl:text-2xl 3xl:text-3xl text-right"
              onClick={resetQuiz}
            >
              Wanna Play Again?
            </Link>
          </div>
        </div>
      </section>

      <section className="h-[45%] lg:h-full lg:w-[45%] flex items-center justify-center bg-base-100">
        <h2 className="sr-only">Your Score:</h2>
        <span className="block font-bebas text-primary text-9xl sm:text-10xl md:text-11xl xl:text-12xl 2xl:text-13xl 3xl:text-15xl animate-bounce-in">
          {score}/10
        </span>
      </section>

      <div className="h-[10%] lg:h-full lg:w-[10%] bg-primary"></div>
    </main>
  );
}
