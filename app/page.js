'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Home() {

  const [contacts,setContacts] = useState([])
  const [error, setError ] = useState(null)

  useEffect(()=>{
    const url = "https://jsonplaceholder.typicode.com/users"
    async function fetchData(){
      const response = await fetch(url)
      const data = response.json()
      console.log(data)
    }
    const Newdata = fetchData()
    console.log(Newdata)
  })
  
  return <div className='' >
    <p>Home</p>
  </div>
}
