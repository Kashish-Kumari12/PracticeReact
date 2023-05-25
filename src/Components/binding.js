import React from 'react';
class Binding extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Hello Binding"
        }
        // this.handleMe=this.handleMe.bind(this);
    }
    // handleMe(){
    //     this.setState({
    //         message:"Good bye"
    //     })
    // }
    handleMe=()=>{
        this.setState({
            message:'Good BYE'
        })
    }
        render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                {/* one way      <button onClick={()=>{this.handleMe()}}>Click me</button> */}
                {/* 2nd way      <button onClick={this.handleMe.bind(this)}> click me</button> */}
                {/* <button onClick={this.handleMe}> click me</button> */}
                <button onClick={this.handleMe}> click me</button>
            </div>
        )
    }
}
export default Binding;