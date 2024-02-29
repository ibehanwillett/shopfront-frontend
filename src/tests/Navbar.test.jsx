import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import { CartContextProvider } from '../app-context/CartContext'


describe('Navbar Test', () => {
    it('renders the navigation bar and check links', () => {
        render(
            <Router>
                <CartContextProvider>
                    <Navbar />
                </CartContextProvider>
            </Router>
        )

        const homeLink = screen.getByText('HOME')
        expect(homeLink).toBeInTheDocument()
        expect(homeLink.closest('a')).toHaveAttribute('href', '/')
    })
})