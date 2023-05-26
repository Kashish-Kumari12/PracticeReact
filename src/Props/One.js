import React from 'react';
import Two from './Two';

function One(props) {
    const name="Kashish"
    const fun=()=>{
        alert('Hello World')
    }
    return (
        <div>
            <Two name={name} fun={fun}/>
        </div>
    );
}

export default One;