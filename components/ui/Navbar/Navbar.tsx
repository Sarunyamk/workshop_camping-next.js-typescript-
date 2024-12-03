import { Darkmode } from "./Darkmode"
import Logo from "./Logo"
import Search from "./Search"


const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col items-center md:flex-row justify-between py-8 gap-4">        
        <Logo />
        <Search />
        <div className="flex gap-4">
        <Darkmode />
        <h1>profile</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
