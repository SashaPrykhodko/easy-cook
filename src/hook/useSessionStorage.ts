import {useCallback, useState} from "react";
import type {Recipe} from "../types/recipe.ts";

export function useSessionStorage(key: string, initialValue: Recipe[]): [Recipe[], (value: Recipe[] | ((prev: Recipe[]) => Recipe[])) => void] {
    const [stored, setStored] = useState<Recipe[]>(() => {
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

    const setValue = useCallback((value: Recipe[] | ((prev: Recipe[]) => Recipe[])) => {
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

    return [stored, setValue];
}

