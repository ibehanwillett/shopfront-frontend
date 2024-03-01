import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from '../components/Home/Home'
import { ItemsContext } from '../app-context/ItemsContext'
import {MemoryRouter } from 'react-router-dom'


// Defines a mock item object to simulate a real item that could be passed to the Home component via context.
const mockItem = {
    id_: '123', 
    category: 'Art',
    name: 'Test Item',
    price: 23,
    featured: true,
    description: 'Test Description',
    image: 'test-image.png',
}

describe('Home Component', () => {

    // Tests if the Home component correctly renders a featured item.
    it('renders one featured item', () => {
        // Renders the Home component within a MemoryRouter (to simulate router context) 
        // and ItemsContext.Provider (to provide mock items data to the component).
        render(
            <MemoryRouter>
                <ItemsContext.Provider value={{ items: [mockItem] }}>
                    <Home />
                </ItemsContext.Provider>
            </MemoryRouter>
        );
        // Asserts that the text 'Test Item' (name of the mock item) is present in the document,
        // indicating that the featured item is correctly rendered.
        const itemName = screen.getByText('Test Item')
        expect(itemName).toBeInTheDocument()
    });

    // Tests if the Home component renders an <h2> element with specific text.
    it('renders h2', () => {
        // Similar setup as above, rendering the Home component within the required context.
        render(
            <MemoryRouter>
                <ItemsContext.Provider value={{ items: [mockItem] }}>
                    <Home />
                </ItemsContext.Provider>
            </MemoryRouter>
        );
        // Asserts that an <h2> element with the text 'WELCOME' is present in the document,
        // verifying the presence of expected static content within the Home component.
        const itemName = screen.getByText('WELCOME')
        expect(itemName).toBeInTheDocument()
    });

});
