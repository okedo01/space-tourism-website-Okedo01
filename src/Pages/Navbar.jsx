import { Link } from "react-router-dom";
import data from "../starter-code/data.json"
import logoIMG from "../starter-code/assets/shared/logo.svg"

const Navbar = () => {
    return ( 
        <div className="wrapper">
            <img src={logoIMG} alt="" />
            <ul>
                <li className="links">
                    <Link to="/">00 Home</Link>
                    <Link to="/dest">01 Destination</Link>
                    <Link to="/crew">02 Crew</Link>
                    <Link to="/tech">03 Technology</Link>
                </li>
            </ul>
            { console.log(data)
            }
        </div>
     );
}
 
export default Navbar;