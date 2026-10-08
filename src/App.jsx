import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css';
import About from './About';
import Tasklist from './Tasklist';

// component :- it is a js function which returns JSX
// JSX:- html like code
// jsx -> js => babel
// props -> read-only
// state -> the data change which also needs to change
// my ui should be in state
// 
function App() {
  const [input, setInput]  = useState('');
  const [todoData, setTododata] = useState([1,2]);
  return (
    <>
    <div className='container'>
      <div className='inputbtn'>
      <input
        value={input}
        onChange={(e)=>{
          console.log("triggered");
          setInput(e.target.value);
        }}
      />
      <button
       className="submitbtn"
       onClick={()=>{
        setTododata((prev)=>{
          const newData = [
            ...prev,
            input
          ]
          return newData;
        });
       }}
       >   
        Submit
      </button>   
      </div>
       {
       todoData.map((item)=>{
         return <Tasklist 
         key={item} 
         todotext={item}
         setTododata={setTododata}
         todoData={todoData}
         />
       })
        }
      </div>
    </>
  )
}

export default App;
