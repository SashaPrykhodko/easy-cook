import {useCallback, useState} from "react";

export function useSessionStorage(key, initialValue) {
    const [stored, setStored] = useState(() => {
        try {
            const item = sessionStorage.getItem(key);
            if (item === null || item === "undefined") {
                return initialValue;
            }
            return JSON.parse(item);
        } catch (error) {
            console.error('Error parsing sessionStorage:', error);
            return initialValue;
        }
    });

    const setValue = useCallback((value) => {
        const currentValue = (() => {
            try {
                const item = sessionStorage.getItem(key);
                if (item === null || item === "undefined") {
                    return initialValue;
                }
                return JSON.parse(item);
            } catch {
                return initialValue;
            }
        })();

        const valueToStore = value instanceof Function ? value(currentValue) : value;

        sessionStorage.setItem(key, JSON.stringify(valueToStore));
        setStored(valueToStore);
    }, [key, initialValue]);

    return [stored, setValue]
}

