import React, {Component} from 'react';
class HelloClass extends Component{

    render(){
        
        return (
            <div>
                <h1>
                Hello from Class {this.props.name} and {this.props.cast}
                </h1>
            </div>
        )
    }
       
    
}
export default HelloClass;

//destructuring as in class

// import React, {Component} from 'react';
// class HelloClass extends Component{

//     render(){
//         const {name, cast}=this.props
//         return (
//             <div>
//                 <h1>
//                 Hello from Class {name} and {cast}
//                 </h1>
//             </div>
//         )
//     }
       
    
// }
// export default HelloClass;