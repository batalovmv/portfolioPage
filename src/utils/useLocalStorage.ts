import { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue: any) {
    const saved = localStorage.getItem(key);
    try {
        const initial = saved !== null ? JSON.parse(saved) : defaultValue;
        return initial;
    } catch (e) {
        console.error('Parsing error on', key, e);
        return defaultValue;
    }
}

export const useLocalStorage = (key: any, defaultValue: any) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
