import { useState } from "react";

export default function useInput(
    initialValue : string,
    type : string
) {
    const [inputValue, setInputValue] = useState(initialValue);
    
    const inputChnageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const input = (
        <input 
        onChange={inputChnageHandler}
        type={type} 
        value={inputValue}/>
    );

    return [
        input,
        inputValue,
        setInputValue
    ] as const;
}