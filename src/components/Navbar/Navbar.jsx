import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
export default function Navbar() {
    return(
        <>
        <nav
            className="navbar navbar-expand-sm py-4 fixed-top">
            <div className="container ">
                <Link className="navbar-brand text-white fw-bold fs-2" to="home">START FRAMEWORK</Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-5 mt-lg-0 fw-bold me-4" >
                      
                        <li className="nav-item me-3 px-1">
                            <Link className="nav-link text-white fw-bold   text-uppercase " style={{fontSize:16+'px'}} to="about">ABOUT</Link>
                        </li>
                        <li className="nav-item me-3 px-1">
                            <Link className="nav-link  fw-bold text-white  text-uppercase " style={{fontSize:16+'px'}}  to="portfolio">PORTFLIO</Link>
                        </li>
                        <li className="nav-item me-3 px-1">
                            <Link className="nav-link  fw-bold text-white  text-uppercase " style={{fontSize:16+'px'}} to="contact">CONTACT</Link>
                        </li>
                      
                    </ul>
                    
                </div>
            </div>
        </nav>
        
        </>
    )
}