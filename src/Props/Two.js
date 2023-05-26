import React from 'react';
import GrandChild from './GrandChild';

function Two({name, fun}) {
 
    return (
        <div>
           <h1>hi {name}</h1>
           <button onClick={fun}>Submit</button>
           <GrandChild name={name}/>
        </div>
    );
}

export default Two;