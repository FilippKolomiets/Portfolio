import { useEffect } from 'react';
import initScrollReveal from '../utils/initScrollReveal';

const useScrollReveal = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);
};

export default useScrollReveal;
