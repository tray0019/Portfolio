import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav >
            <Link style={{padding: "7px"}} to="/" >Home</Link>
            <Link style={{padding: "7px"}} to="About" >About</Link>
            <Link style={{padding: "7px"}} to="Projects" >Projects</Link>
        </nav>
    )
}

export default NavBar;