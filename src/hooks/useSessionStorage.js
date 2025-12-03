import {useState} from "react";

export function useSessionStorage(key, initialValue) {
    const [stored, setStored] = useState(() => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
        setStored(value);
    }

    return [stored, setValue]
}

