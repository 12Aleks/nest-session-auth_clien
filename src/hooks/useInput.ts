import {useState, ChangeEvent} from "react";

export const useInput = (payload: string) => {
    const [value, setValue] = useState<string>('');

    const onChange = (e?: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
       e?.stopPropagation();
       e ? setValue(e.target.value): setValue('')
    }



    return {value, onChange}
}