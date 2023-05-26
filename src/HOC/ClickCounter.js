import React, { useState } from 'react';
import { ExtandedComponent } from './HOC';
function ClickCounter(props) {
    const count=props.count;
    const [name,setName]=useState('');
    const incrementfunction=props.incrementfunction
    return (
        <div>
            <h1>{count}</h1>
            {/* <button onClick={incrementfunction}> Click {count}</button> */}
            <input type="text" onKeyDown={incrementfunction}/>you clicked {count}
        </div>
    );
}

export default ExtandedComponent(ClickCounter,10);