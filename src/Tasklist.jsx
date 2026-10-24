 import axios from 'axios'
import React, { useState } from 'react'

export default function Tasklist({ setTodoData,item,fetchData,setLoading}) {
  
  return (
    <div className="minicontainer">
        <p>{item.text}</p>
        <button>Edit</button>
        <button onClick={async ()=>{
            try{
                setLoading(true);
                const data = await axios.delete(`https://6a4648c2a268c8be2ce78d13.mockapi.io/todo/${item.id}`);
                fetchData();
                setLoading(false);
            }catch{

            }
        }}>Delete</button>
    </div>
  )
}
