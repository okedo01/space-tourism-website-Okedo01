import Home from "../Pages/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div style={{
            background: "red"
        }}>
            <Link to="/">Home</Link>
            <Link to="/destination">Destination</Link>
            <Link to="/crew">Crew</Link>
            <Link to="/technology">Technology</Link>
        </div>
     );
}
 
export default Navbar;