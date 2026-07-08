import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to="/" >Home</Link>
            <Link to="About" >About</Link>
            <Link to="Projects" >Projects</Link>
        </nav>
    )
}

export default NavBar;