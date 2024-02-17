import react, { useRef } from 'react'
import { Link } from "react-router-dom"
import './styles/navbar-styles.css'
import '../index.css'

const Navbar = () => {

    const navBarRef = useRef()

    function toggleHamburger(evt) {
        evt.target.classList.toggle("is-active")
        navBarRef.current.classList.toggle("is-active")
    }

    return (
        <>
        <nav role="navigation" aria-label="main navigation">
            <div>
                {/* Link to return home */}
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>

                <a role="button" onClick={toggleHamburger} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div onClick={toggleHamburger} ref={navBarRef} className="navbar-menu">
                <div className="navbar-start">
                    {/* Link to home "/" */}
                    <Link to="/" >
                        Home
                    </Link>
                    {/* Link to category "/category" */}
                    <Link id='nav-link' to="/shop" >
                        Shop
                    </Link>
                    <Link to="/about" >
                        About
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar