import React,{Component} from 'react';
import axios from "axios"
class ClassEffect extends Component{
    constructor(props){
        super(props)
        this.state={
          post:[],
          id:null
        }
    }
    handleTimes(){
        this.setState((prevtimes)=>({times: prevtimes.times+1 }))
    }
    componentDidMount(){
        // document.title=`You clicked me ${this.state.times}`
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({post: res.data})
        })
        .catch(err=>{
            console.log(err);
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.id!==this.state.id && this.state.id!==null){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
        .then(res=>{
            this.setState({post: [res.data]})
        })
        .catch(err=>{
            console.log(err);
        })
    
        }
     
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.id} onChange={((e)=>this.setState({id: Number(e.target.value)}))}/>
                {/* {this.state.post.title} */}
                {this.state.post.map(posts=><li>{posts.title}</li>)}
               
                {/* <button onClick={()=>this.handleTimes()}>you Clicked {this.state.times}</button> */}
            </div>
        )
    }
}
export default ClassEffect