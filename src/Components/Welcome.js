// import React from 'react';

// function Welcome(props){
    
//     return (
//         <div>
//            <h1>Hello {props.name} and {props.cast}</h1> 
//            {props.children}
//         </div>
//     );
// }

// export default Welcome;


//this is destructuring of props
import React from 'react';

function Welcome(props){
    const {name, cast, children}=props
    return (
        <div>
           <h1>Hello {name} and {cast}</h1> 
           {children[1]}
        </div>
    );
}

export default Welcome;