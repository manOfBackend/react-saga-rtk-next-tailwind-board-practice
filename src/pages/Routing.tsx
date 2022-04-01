import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RouterPath) {
        navigate(path);
      },
    };
  }, [navigate]);
}

type RouterPath = '/board' | '/write';