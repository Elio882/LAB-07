import { useState } from "react";

export const Button = props => {
    const { text } = props;
    function handlerButton(){
        alert(Math.floor(Math.random() * 101))
    }

    return (
        <button onClick={ handlerButton }>
           {text} 
        </button>
    );
}