import React,{useState} from 'react';

function HookArray(props) {
    const [items, setItems]=useState([])

    function addItems(){
        setItems([
            ...items,
            {id: items.length,
            value:12
        }])
    }
    return (
        <div>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {items.map(item=><li key={item.id}>{item.value}</li>
)}
            </ul>
        </div>
    );
}

export default HookArray;