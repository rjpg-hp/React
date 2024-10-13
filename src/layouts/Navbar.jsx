import "../styles/navbar.css"
import reactLogo from "../assets/react.svg"
import { Link } from "react-router-dom";
import { Suspense } from "react";

export default function Navbar() {
    return ( 
        <div>
            <nav className="navbar">
                <div className="logo">
                    <Link to="https://react.dev">
                        <Suspense>
                            <img src={ reactLogo } alt="React Logo" />
                        </Suspense>
                    </Link>
                </div>
                <h1 className="heading">Learn React</h1>
                <ul className="navigation">
                    <li className="links"><Link to="/">Home</Link></li>
                    <li className="links"><Link to="/learn">Learn</Link></li>
                    <li className="links"><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
     );
}
