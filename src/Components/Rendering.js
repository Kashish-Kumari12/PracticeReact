import React from 'react';

function Rendering(props) {
    // const name=""
    // if(name==='Kashish')
    // {
    //     return <div>welcome kashish</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }
//     let message=""
//    const name="Kashish"
//     if(name==='Kashish')
//     {
//         message=<div>welcome kashish</div>
//     }
//     else{
//         message=<div>Welcome Guest</div>
//     }
//     return(
//         <div>{message}</div>
//     )

//ternary operator
    // const name=false
    // return(
    //     name?<div>Welcome Kashish</div>: <div>Welcome Guest</div>
    // )
    // short Circuit
const name=true;
return (name && <div>Welcome Kashish</div>)

    
}

export default Rendering;