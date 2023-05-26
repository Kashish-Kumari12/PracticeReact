import React,{useEffect, useState} from 'react';
import axios from 'axios'
function FetchingQuestion(props) {
const [search, setSearch]=useState('react');
const [post, setPost]=useState([]);
useEffect(()=>{
   fetchingData()
},[])

const fetchingData=()=>{
    axios.get(`https://hn.algolia.com/api/v1/search?query= ${search}`)
    .then(res=>{
        console.log(res)
        setPost(res.data.hits)
    })
    .catch(err=>{
        console.log(err)
    })
}
const handleSubmit=(e)=>{
    e.preventDefault()
      fetchingData()
      
}
const dismissButton=(objID)=>{
    const updatedStories =post.filter((item)=>item.objectID!==objID)
    setPost(updatedStories);
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>MY HACKER STORIES</h1>
            <label>Search</label>
            <input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
            <button type='submit'>Submit</button>
            </form>
            <div>
                {post.map((items)=>(<li key={items.objectID}>{items.title}
                <button onClick={()=>   dismissButton(items.objectID)}>Dismiss</button>

                </li>))}
                
            </div>
        </div>
    );

}

export default FetchingQuestion;