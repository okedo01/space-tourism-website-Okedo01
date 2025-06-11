import { Link } from "react-router-dom";
// import logoIMG from "./starter-code/assets/shared/logo.svg"

const Navbar = () => {
    return ( 
        <div className="wrapper">
            <h1>Hello</h1>
            <ul>
                <li>
                    <Link to="#">Home</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;