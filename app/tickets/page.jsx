import { Suspense } from "react";
import Ticketlist from "./Ticketlist";
import Loading from "../loading";

const Tickets = () => {
    return ( 
        
        <div>
            <h2 className="text-red-600 ml-10">Tickets</h2>     
            <Suspense fallback={<Loading />}>
            <div className="mx-8">
            <Ticketlist />
            </div>
            </Suspense>
         

        </div>
     );
}
 
export default Tickets;