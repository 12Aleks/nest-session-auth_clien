import {useState, ChangeEvent} from "react";

export const useInput = (payload: string) => {
    const [value, setValue] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setValue(e.target.value);
    }

    return {value, onChange}
}