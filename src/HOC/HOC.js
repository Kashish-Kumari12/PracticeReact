import React, { useState } from 'react';
export const ExtandedComponent=(OriginalComponents, input)=>{
function HOC(props) {
    const [count, setCount]=useState(0);
    const incrementfunction=()=>{
        setCount(count+input);
    }
    return (
        <div>
            {/* <OriginalComponents {...props.name}/> */}
            <OriginalComponents count={count} incrementfunction={incrementfunction}/>
        </div>
    );
}
return HOC

}
