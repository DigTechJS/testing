import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} className="logo"/>
            </Link>
            
            <nav>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </nav>
          </header>
    )
}