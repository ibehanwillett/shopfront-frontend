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
        <div>
            <a role="button" onClick={toggleHamburger}>
                <span></span>
                <span></span>
                <span></span>
            </a>

            <div onClick={toggleHamburger} ref={navBarRef} className="navbar-menu">
                <div className="navbar-start">
                    {/* Link to home "/" */}
                    <Link to='/' >
                        HOME
                    </Link>
                    {/* Link to category "/category" */}
                    <Link id='nav-link' to='/shop' >
                        SHOP
                    </Link>
                    <Link to='/about' >
                        ABOUT
                    </Link>
                </div>
            </div>
        </div>
            

            <Link to='/'>
                <img id='sitelogo' src={siteLogo} alt="site logo" />
            </Link>

            <div >
                <Link id='icons' to='/'>
                    <UserIcon />
                </Link>
                <Link id='icons' to='/'>
                    <CartIcon />
                </Link>
                
            </div>
            
        </nav>
        </>
    )
}

export default Navbar