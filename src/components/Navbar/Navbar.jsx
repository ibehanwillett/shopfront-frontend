import react, { useRef } from 'react'
import { Link } from "react-router-dom"
import { useCartContext } from "../../app-context/CartContext"
import '../styles/navbar-styles.css'
import '../../index.css'
import { UserIcon, CartIcon } from './NavIcons.jsx'
import siteLogo from '../../assets/site-logo.png'


// Navbar is constant accross most of the site. It serves as the
// main point of navigation.
const Navbar = () => {

    const navBarRef = useRef()
    const { cartItems } = useCartContext();
    const itemCount = cartItems.length; 

    // This function toggles the slide on menu with links to Home,
    // Shop, and About. 
    function toggleHamburger(evt) {
        evt.stopPropagation();
        evt.currentTarget.classList.toggle("is-active")
        navBarRef.current.classList.toggle("is-active")
    }
    // Spans are used to create a hamburger menu with <a> tag that toggles 
    // the slide on menu
    return (
        <>
        <nav role="navigation" aria-label="main navigation">
            <div className='nav-left'>
                <a role="button" onClick={toggleHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                {/* If the user clicks on one of the links, that will also toggle 
                the slide on menu */}
                <div onClick={toggleHamburger} ref={navBarRef} className="navbar-menu">
                    <div className="navbar-start">
                        <Link onClick={toggleHamburger} to='/'>HOME</Link>
                        <Link onClick={toggleHamburger} id='nav-link' to='/shop'>SHOP</Link>
                        <Link onClick={toggleHamburger} to='/about'>ABOUT</Link>
                        <a className="close-menu" role="button" onClick={toggleHamburger}>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Logo will take the user Home */}
            <div className='logo-container'>
                <Link to='/'><img id='sitelogo' src={siteLogo} alt="site logo" /></Link>
            </div>
            {/* The Login Icon will take the user to teh login page and the cart icon navigates
            to the Cart where the user's selected items can be seen. */}
            <div className='nav-right'>
                <Link id='icons' to='/login'> <UserIcon /> </Link>
                <Link id='icons' to='/cart'> <CartIcon itemCount={itemCount} /> </Link>
            </div>
            
        </nav>
        </>
    )
}

export default Navbar