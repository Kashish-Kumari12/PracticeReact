import React from 'react';
import { useState } from 'react';

function HookOne() {
    const [count, setCount]=useState(0);

    function handleFive(){
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }
    }
    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={()=>setCount((prevcount)=>prevcount+1)}>increment</button>
            <button onClick={()=>setCount((prevcount)=>count-1)}>decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={handleFive}>incrementfive</button>
            
        </div>
    );
}

export default HookOne;