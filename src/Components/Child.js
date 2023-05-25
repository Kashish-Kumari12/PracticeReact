import React from 'react';
import Parents from './Parents';
function Child(props) {
    return (
        <div>
            <button onClick={()=>props.Greet('child')}>Click Me</button>
       
        </div>
    );
}

export default Child;