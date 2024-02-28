import react, { useRef } from 'react'
import { Link } from "react-router-dom"
import { useCartContext } from "../../app-context/CartContext"
import '../styles/navbar-styles.css'
import '../../index.css'
import { UserIcon, CartIcon } from './NavIcons.jsx'
import siteLogo from '../../assets/site-logo.png'


const Navbar = () => {

    const navBarRef = useRef()
    const { cartItems } = useCartContext();
    const itemCount = cartItems.length; 


    function toggleHamburger(evt) {
        evt.stopPropagation();
        evt.currentTarget.classList.toggle("is-active")
        navBarRef.current.classList.toggle("is-active")
    }

    return (
        <>
        <nav role="navigation" aria-label="main navigation">
            <div className='nav-left'>
                <a role="button" onClick={toggleHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

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
            
            <div className='logo-container'>
                <Link to='/'><img id='sitelogo' src={siteLogo} alt="site logo" /></Link>
            </div>

            <div className='nav-right'>
                <Link id='icons' to='/artistportal'> <UserIcon /> </Link>
                <Link id='icons' to='/cart'> <CartIcon itemCount={itemCount} /> </Link>
            </div>
            
        </nav>
        </>
    )
}

export default Navbar