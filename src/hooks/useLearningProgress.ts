import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-learning-progress-v1';

function readStoredProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function useLearningProgress() {
  const [progress, setProgress] = useState<Record<string, boolean>>(() => readStoredProgress());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // localStorage unavailable (private browsing, quota, etc.) — progress just won't persist
    }
  }, [progress]);

  const toggle = useCallback((id: string) => {
    setProgress((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const reset = useCallback(() => setProgress({}), []);

  return { progress, toggle, reset };
}
