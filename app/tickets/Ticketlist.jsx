import React from 'react'
import Link from 'next/link';

async function getTickets(){
  await new Promise(resolve => setTimeout(resolve, 3000))
const res  = await fetch('http://localhost:4000/tickets', {
    next:{
      revalidate: 0
    }
})
return res.json();
}

export default async function Ticketlist() {

const Tickets = await getTickets();

  return (
    <div>
      
      {Tickets.map((ticket)=>{
        return(
          <div className='card mx-5' key={ticket.id}>
            <Link href={`tickets/${ticket.id}`}>
            <h2>{ticket.title}</h2>
              <p>{ticket.body.slice(0,200)}...</p>
              <div className = {`pill ${ticket.priority}`} >
                {ticket.priority}
              </div> 
            </Link>
            
          </div>
        )
      
      })}
         {Tickets == 0 && <h2>no tickets found </h2> }
        
    </div>
  )
}





