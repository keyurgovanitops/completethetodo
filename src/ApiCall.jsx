import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DotLoader, FadeLoader } from 'react-spinners';

export default function Apicall() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // retry - meachanism
    // 5s
    // setError(false)

    async function fetchData(){
        try{
            setLoading(true);
            const rawResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/');
            setData(rawResponse.data);
            setLoading(false);
        }catch{
            setError(true);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    console.log("printing outside the function",data);
  return (
    <div>
        {error? <h1 style={{color:"white"}}>Failed to load page</h1> : ""}
        {loading? <DotLoader height={150} width={150} color={'#ffffff'} />: ""}
      {
        data.map((i)=>{
            return (
                <div key={i.id} style={{color:'white'}}>
                    {i.title}
                </div>
            )
        })
      }
    </div>
  )
}
