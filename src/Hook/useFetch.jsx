import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const useFetch = (url) => {

    const [data,setData]=useState([])
    const [loading,setloading] = useState(false)
    const [error,seterror] = useState(false)
  
    const fetchData=()=>{
      fetch(url)
      .then((r)=>r.json()) // using this bcs our link in json link thats why 
      .then((r)=>{
        setData(r.items);
        setloading(false)
      })
      .catch((err)=>{
        setloading(false);
        seterror(true)
      });
    }
  useEffect(()=>{
    fetchData();
  },[])

  return  {data,loading,error}
}

export default useFetch