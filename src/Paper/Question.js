import React, { useState } from 'react';

function Question(props) {
    const {initial,min,max}=props
    const [count, setCount]=useState(initial)
    const decrement=()=>{
        if(count>min && count<=max){
            setCount(count-1)
        }
      
    }
    const increment=()=>{
        if(count<max){
            setCount(count+1)
        }
    }
    return (
        <div>
            <button onClick={decrement}>
                -minus
            </button>
            <label>{count}</label>
            <button onClick={increment}>
                +add
            </button>
        </div>
    );
}

export default Question;