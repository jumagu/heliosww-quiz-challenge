import { RouterProvider } from 'react-router';

import { Toaster } from 'sonner';

import router from '@/router';

function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
