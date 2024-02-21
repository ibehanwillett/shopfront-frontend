import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Cart from "../components/Cart/Cart"
import userEvent from "@testing-library/user-event"

describe ("Cart Component", () => {
    it("renders the cart component", () => {
        let container = render(<Cart />).container
    expect(container.querySelector('h2')).toHaveTextContent("Cart")
    })
    
})