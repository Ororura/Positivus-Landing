import { useCallback } from 'react';

const useSplitTitle = () => {
  const split = useCallback((title: string) => {
    const words = title.split(' ');
    const lastWord = words.pop();
    const remainingWords = words.join(' ');
    return { lastWord, remainingWords };
  }, []);

  return { split };
};

export { useSplitTitle };
