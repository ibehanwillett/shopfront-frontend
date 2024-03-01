import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { CartProvider } from '../app-context/CartContext';
import Cart from '../components/Cart/Cart';
import { BrowserRouter } from 'react-router-dom';
// import userEvent from "@testing-library/user-event"


describe('<CartProvider />', () => {
    it('provides expected CartContext obj to child elements', () => {
      // Uses the render method from React Testing Library to render the <CartProvider> component
      // wrapped around a <Cart> component, which is a child component that uses the context provided by <CartProvider>.
      render(
        <CartProvider>
            <BrowserRouter>
                < Cart/>
          </BrowserRouter>
        </ CartProvider>
      );
      // The test expects that within the rendered output of <CartProvider>, there is an element
      // that is accessible as a heading (e.g., <h2>) and is present in the document.
      // This assertion is used to verify that the <Cart> component is correctly receiving the context
      // object from <CartProvider> and rendering its content as expected.
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