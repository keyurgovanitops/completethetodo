 import React from 'react'

export default function Tasklist({todotext,todoData, setTodoData}) {
  return (
    <div className="minicontainer">
        <p>{todotext}</p>
        <button>Edit</button>
        
        <button onClick={()=>{
            setTodoData((prev)=>{
                prev.filter((item)=>{
                    return item!=todotext
                })
            })
        }}>Delete</button>
    </div>
  )
}
