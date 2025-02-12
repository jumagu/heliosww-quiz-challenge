import { useEffect } from 'react';

const usePreventReload = (shouldPrevent: boolean = true): void => {
  useEffect(() => {
    if (!shouldPrevent) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = 'Are you sure you want to exit? Unsaved changes will be lost.';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [shouldPrevent]);
};

export default usePreventReload;
