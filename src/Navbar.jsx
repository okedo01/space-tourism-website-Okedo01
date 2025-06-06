// import Home from "../Pages/Home";
import { Link } from "react-router-dom";
import "../src/index.css"
import Home from "./Pages/Home";
import logoIMG from "./starter-code/assets/shared/logo.svg"

const Navbar = () => {
    return ( 
        <div className="wrapper">
            <img src={logoIMG} alt="logo.svg" />
            <div className="nav-links">
                <Link to="/"><span>00</span>Home</Link>
                <Link to="/destination"><span>01</span>Destination</Link>
                <Link to="/crew"><span>02</span>Crew</Link>
                <Link to="/technology"><span>03</span>Technology</Link>
            </div>
        </div>
     );
}
 
export default Navbar;