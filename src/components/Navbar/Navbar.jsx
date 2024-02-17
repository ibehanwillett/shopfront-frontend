import react, { useRef } from 'react'
import { Link } from "react-router-dom"
import '../styles/navbar-styles.css'
import '../../index.css'
import { UserIcon, CartIcon } from './NavIcons.jsx'
import siteLogo from '../../assets/site-logo.png'


const Navbar = () => {

    const navBarRef = useRef()

    function toggleHamburger(evt) {
        evt.target.classList.toggle("is-active")
        navBarRef.current.classList.toggle("is-active")
    }

    return (
        <>
        <nav role="navigation" aria-label="main navigation">

            <Link to='/'>
                <img src={siteLogo} alt="site logo" />
            </Link>

            <a role="button" onClick={toggleHamburger}>
                <span></span>
                <span></span>
                <span></span>
            </a>

            <div>
                <Link to='/'>
                    <UserIcon />
                </Link>
                <Link to='/'>
                    <CartIcon />
                </Link>
                
            </div>

            <div onClick={toggleHamburger} ref={navBarRef} className="navbar-menu">
                <div className="navbar-start">
                    {/* Link to home "/" */}
                    <Link to='/' >
                        Home
                    </Link>
                    {/* Link to category "/category" */}
                    <Link id='nav-link' to='/shop' >
                        Shop
                    </Link>
                    <Link to='/about' >
                        About
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar