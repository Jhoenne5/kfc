import Link from "next/link";
import Image from "next/image"
import Logo from "./logo.png"

const Navbar = () => {
    return ( <div>
         <nav>
      <Image src={Logo} alt="Kfc log"
      width={100}
      height={100} 
      quality={100}
      placeholder="blur"
      />
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create</Link>
      </nav>
    </div> );
}
 
export default Navbar;