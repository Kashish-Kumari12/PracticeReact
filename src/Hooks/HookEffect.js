import axios from 'axios';
import React,{useEffect, useState} from 'react';



function HookEffect(props) {
    const [posts, setPosts]=useState([]);
    const [id, setId]=useState(1);
    const [formclick,setFormclick]=useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[formclick])
    return (
        <div>
            {/* first way */}
            {/* {posts.map(post=><li>{post.title} </li>)} */}
            {/* 2nd way */}
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
       
           <li>{posts.title}</li>

           {/* third way */}
           <button onClick={()=>{setFormclick(id)}}>
                Update
           </button>
           
        </div>
    );
}

export default HookEffect;