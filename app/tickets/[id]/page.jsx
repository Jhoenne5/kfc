import {notFound} from 'next/navigation'
import React from 'react'

export const dynamicParams = true


const getTicket = async (id) =>{
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch('http://localhost:4000/tickets/' + id,{
        next:{
            revalidate:0
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}

export default async function getDetails({params}) {

    const ticket = await getTicket(params.id)
  return (  
    <div className='card'>
        <h2>{ticket.title}</h2>
        <small>created by: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}> 
        {ticket.priority}
        </div>
    </div>
  )
}
