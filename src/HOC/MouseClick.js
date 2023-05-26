import React from 'react';
import { ExtandedComponent } from './HOC';
function MouseClick(props) {
    const {count,incrementfunction}=props
    return (
        <div>
            <h1 onMouseOver={incrementfunction}>this is incement {count}</h1>
        </div>
    );
}

export default ExtandedComponent(MouseClick,2);