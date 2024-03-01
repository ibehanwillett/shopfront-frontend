import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ArtistPortal from '../components/ArtistPortal/ArtistPortal'
import ItemCreate from '../components/ArtistPortal/ItemCreate'
import ItemDelete from '../components/ArtistPortal/ItemDelete'
import { ItemsContext } from '../app-context/ItemsContext'
import {MemoryRouter } from 'react-router-dom'

const mockDeleteItem = vi.fn()
const mockAddItem = vi.fn()
const mockItems = [
    { _id: '1', name: 'Item 1' },
    { _id: '2', name: 'Item 2' },
]

const mockContext = {
    addItem: mockAddItem,
    items: mockItems,
    deleteItem: mockDeleteItem,
}


describe('Artist Portal Component', () => {

    it('renders the Artist Portal component', () => {
        const { container } = render(<ArtistPortal/>)
        expect(container.querySelector('h2')).toHaveTextContent('Hi, Nicole')
    })
})


describe('ItemCreate Component', () => {

    it('has an option for Item Category', () => {
        const { container } = render(<ArtistPortal/>)
        expect(container.querySelector('option')).toHaveTextContent('Item Category')
    })

    it('renders correctly', async () => {
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <ItemsContext.Provider value={ mockContext }>
                    <ItemCreate />
                </ItemsContext.Provider>
            </MemoryRouter>
        )

        fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'New Item' } })
        fireEvent.change(getByPlaceholderText('Description'), { target: { value: 'New Description' } })
        fireEvent.change(getByText('Art'), { target: { value: 'Art' } })
        fireEvent.change(getByText('M'), { target: { value: 'M' } })
        fireEvent.change(getByText('true'), { target: { value: 'true' } })
        fireEvent.change(getByPlaceholderText('Price'), { target: { value: 20 } })
    }) 
})

describe('ItemDelete Component', () => {
    it('allows a user to select and delete an item', async () => {
        render(
            <MemoryRouter>
                <ItemsContext.Provider value={mockContext}>
                    <ItemDelete />
                </ItemsContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Select Item')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('drop-down'), { target: { value: '1' } }) 

        fireEvent.click(screen.getByText('Delete'))

        await waitFor(() => {
            expect(mockDeleteItem).toHaveBeenCalledWith('1')
        });
        expect(screen.getByTestId('drop-down').value).toBe('disabled')
    });
});


