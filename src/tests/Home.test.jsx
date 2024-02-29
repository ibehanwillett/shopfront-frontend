import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from '../components/Home/Home'
import { ItemsContext } from '../app-context/ItemsContext'
import {MemoryRouter } from 'react-router-dom'




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

    it('renders one featured item', () => {
        render(
            <MemoryRouter>
                <ItemsContext.Provider value={{ items: [mockItem] }}>
                    <Home />
                </ItemsContext.Provider>
            </MemoryRouter>
        );
        const itemName = screen.getByText('Test Item')
        expect(itemName).toBeInTheDocument()
    });

    it('renders h2', () => {
        render(
            <MemoryRouter>
                <ItemsContext.Provider value={{ items: [mockItem] }}>
                    <Home />
                </ItemsContext.Provider>
            </MemoryRouter>
        );
        const itemName = screen.getByText('WELCOME')
        expect(itemName).toBeInTheDocument()
    });

});