import React from 'react';
import Child from './Child';
function Parents(props) {
    function GreetMe(children){
        alert(`Hello from Parents ${children}`)
    }
    return (
        <div>
            <Child Greet={GreetMe}/>
        </div>
    );
}

export default Parents;