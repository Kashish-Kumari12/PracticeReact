import React from 'react';
import { useState } from 'react';

function Form(props) {
    const [name, setName]=useState('')
    function handleSubmit(){
        alert(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;