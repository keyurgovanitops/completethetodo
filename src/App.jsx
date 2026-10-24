import { useEffect, useState } from 'react'
import './App.css';
import Tasklist from './Tasklist'
import axios from 'axios';
import { DotLoader } from 'react-spinners';

function App() {
  const [input, setInput]  = useState('');
  const [todoData, setTododata] = useState([]);

    const [loading, setLoading] = useState(false);

  async function fetchData(){
    try{
      const data = await axios.get('https://6a4648c2a268c8be2ce78d13.mockapi.io/todo');
      setTododata(data.data);
    }catch{
      console.log("error occurred");
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  console.log(todoData,'data')

  return (
    <>
    <div className='container'>
      {loading && <DotLoader height={150} width={150} color='white'/>}
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
       onClick={async ()=>{
        try{
          const data = await axios.post('https://6a4648c2a268c8be2ce78d13.mockapi.io/todo',{
            text: input
          })
          fetchData();
          setInput('');
        }catch{
          console.log("error occurred");
        }
       }}
       >   
        Submit
      </button>   
      </div>
       {
       todoData.map((item)=>{
         return <div key={item.id}>
            <Tasklist 
          item={item}
          setTododata={setTododata}
          fetchData={fetchData}
          setLoading={setLoading}
          />
         </div>
       })
      }
      </div>
    </>
  )
}

export default App;
