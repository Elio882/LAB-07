import { useState } from "react";
export const CompWithProps = () => {
    const[inputValue,setInputValue] = useState('');
    
    const handleChange = (event) => {
        setInputValue(event.target.value); 
      };
    return(
        <div>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Ingrese algo..." />
            <p>Value: {inputValue}</p>
        </div>
    )
}