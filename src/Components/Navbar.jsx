import Home from "../Pages/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="nav-links">
            <Link to="/">Home</Link>
        </div>
     );
}
 
export default Navbar;