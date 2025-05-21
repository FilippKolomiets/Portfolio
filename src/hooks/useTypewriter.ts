import { useEffect } from 'react';
import startTyping from '../utils/startTyping';

const useTypewriter = () => {
  useEffect(() => {
    startTyping();
  }, []);
};

export default useTypewriter;
