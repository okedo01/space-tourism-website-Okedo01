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
                <Link to="/">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/crew">Crew</Link>
                <Link to="/technology">Technology</Link>
            </div>
        </div>
     );
}
 
export default Navbar;