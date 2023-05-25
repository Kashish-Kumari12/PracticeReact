// import React, {Component} from 'react';
// class Count extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             message: "hello Visitor"
//         }
//     }
//     handleMessage(){
//         this.setState({
//             message: "Good BYE"
//         })
//     }
//     render(){
        
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=>{this.handleMessage()}}>Update</button>

//                 </div>
//         )
//     }
       
    
// }
// export default Count;


import React, {Component} from 'react';
class Count extends Component{
    constructor(props){
        super(props);
        this.state={
           count:0
        }
    }
    handleMessage(){
        // this.state.count=this.state.count+1;
        // console.log(this.state.count);

        // this.setState({
        //     count: this.state.count+1
        // },()=>{
        //     console.log(this.state.count)
        // })
           this.setState((prevSatet)=>({
           count: prevSatet.count+1
        }),()=>{
            console.log(this.state.count)
        })

       
    }
    handleFiveMessage(){
        this.handleMessage()
        this.handleMessage()
        this.handleMessage()
        

    }
    render(){
        
        return (
            <div>
                <h1> Count {this.state.count}</h1>
                <button onClick={()=>{this.handleFiveMessage()}}>Update</button>

                </div>
        )
    }
       
    
}
export default Count;