import { createBrowserRouter, Navigate } from 'react-router';

import HomePage from '@/modules/quiz/pages/HomePage';
import QuizPage from '@/modules/quiz/pages/QuizPage';
import ScorePage from '@/modules/quiz/pages/ScorePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '/score',
    element: <ScorePage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
