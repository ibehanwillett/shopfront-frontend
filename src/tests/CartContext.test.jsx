import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { CartProvider } from '../app-context/CartContext';
import Cart from '../components/Cart/Cart';
import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event"


describe('<CartProvider />', () => {
    it('provides expected CartContext obj to child elements', () => {
      render(
        <CartProvider>
            <BrowserRouter>
                < Cart/>
          </BrowserRouter>
        </ CartProvider>
      );
      expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
    })
  })

// describe ("Cart Component", () => {
//     it("renders the cart component", () => {
//         render(
//         <Cart />
//         )
//         expect(screen.querySelector('h2')).toBeDefined
//     })
    
// })