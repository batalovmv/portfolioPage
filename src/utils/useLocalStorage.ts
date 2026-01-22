import { useEffect, useState } from 'react';

function getStorageValue<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(key);
  try {
    return saved !== null ? (JSON.parse(saved) as T) : defaultValue;
  } catch (e) {
    console.error('Parsing error on', key, e);
    return defaultValue;
  }
}

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
