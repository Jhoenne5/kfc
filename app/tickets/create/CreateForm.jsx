"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function CreateForm() {
const router = useRouter()
const [title, setTitle] = useState("")
const [body, setBody] = useState("")
const [priority, setPriority] = useState("low")
const [isloading, setIsloading] = useState(false)


const handleSubmit = async (e) =>{
e.preventDefault()
setIsloading(true)

const ticket =  {
  title, body, priority, user_email : "jhoenne@gmail.com"
}
const res = await fetch(' http://localhost:4000/tickets',{
  method: "post",
  body: JSON.stringify(ticket),
  headers: {"Content-Type": "application/json"}
})
const data = await res.json();

  if(res.status == 201){
    console.log(data) //CHECK MO MAMAYA JOWEN
    router.refresh()
    router.push('/tickets')
  }


}

  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Title: </span>
          <input type="text"  onChange={(e)=>{setTitle(e.target.value)}}
          value={title}
          />
        </label>
        <label htmlFor="">
          <span>Body: </span>
          <textarea onChange={(e)=>{setBody(e.target.value)}}
          value={body}
          >
          </textarea>
        </label>
        <label htmlFor="">
          <select onChange={(e)=>{setPriority(e.target.value)}}
          value={priority}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium priority</option>
            <option value="high">High priority</option>
          </select>
        </label>
          <button className='btn btn-red' disabled={isloading}>

          {isloading && <h2>Addiingg...</h2>}
          {!isloading && <h2>Add a ticket</h2>}        
          </button>
      </form>


    </main>
  )
}
