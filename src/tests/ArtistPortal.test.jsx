import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ArtistPortal from '../components/ArtistPortal/ArtistPortal'
import ItemCreate from '../components/ArtistPortal/ItemCreate'
import ItemDelete from '../components/ArtistPortal/ItemDelete'
import { ItemsContext } from '../app-context/ItemsContext'
import {MemoryRouter } from 'react-router-dom'

// Setup section where mock functions and data are created for testing purposes.
const mockDeleteItem = vi.fn() // Creates a mock function for simulating the deletion of an item.
const mockAddItem = vi.fn() // Creates a mock function for simulating adding an item.
// Creates an array of mock items to simulate existing items.
const mockItems = [
    { _id: '1', name: 'Item 1' },
    { _id: '2', name: 'Item 2' },
]

// Mocks the context that provides access to items and the functions to modify them. 
// This is useful for testing components that consume this context.
const mockContext = {
    addItem: mockAddItem,
    items: mockItems,
    deleteItem: mockDeleteItem,
}

// Testing the ArtistPortal component.
describe('Artist Portal Component', () => {
    // Test to check if the Artist Portal component renders correctly.
    it('renders the Artist Portal component', () => {
        // Renders the ArtistPortal component and destructures the container from the result.
        const { container } = render(<ArtistPortal/>)
        // Asserts that there is an h2 element with the text 'Hi, Nicole'.
        expect(container.querySelector('h2')).toHaveTextContent('Hi, Nicole')
    })
})

// Testing the ItemCreate component.
describe('ItemCreate Component', () => {
    // Test to check if the ItemCreate component has an option for selecting an item category.
    it('has an option for Item Category', () => {
        // Renders the ArtistPortal component and checks if there's an option element with the text 'Item Category'.
        const { container } = render(<ArtistPortal/>)
        expect(container.querySelector('option')).toHaveTextContent('Item Category')
    })

    // Test to check if the ItemCreate component renders correctly and allows inputting item details.
    it('renders correctly', async () => {
        // Renders the ItemCreate component within a MemoryRouter and ItemsContext provider to simulate routing and context.
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <ItemsContext.Provider value={ mockContext }>
                    <ItemCreate />
                </ItemsContext.Provider>
            </MemoryRouter>
        )

        // Simulates user input for item creation fields (name, description, category, size, featured, price).
        fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'New Item' } })
        fireEvent.change(getByPlaceholderText('Description'), { target: { value: 'New Description' } })
        fireEvent.change(getByText('Art'), { target: { value: 'Art' } })
        fireEvent.change(getByText('M'), { target: { value: 'M' } })
        fireEvent.change(getByText('true'), { target: { value: 'true' } })
        fireEvent.change(getByPlaceholderText('Price'), { target: { value: 20 } })
    }) 
})

// Testing the ItemDelete component.
describe('ItemDelete Component', () => {
    // Test to check if the ItemDelete component allows selecting and deleting an item.
    it('allows a user to select and delete an item', async () => {
        // Renders the ItemDelete component within a MemoryRouter and ItemsContext provider.
        render(
            <MemoryRouter>
                <ItemsContext.Provider value={mockContext}>
                    <ItemDelete />
                </ItemsContext.Provider>
            </MemoryRouter>
        );

        // Asserts that the 'Select Item' text is present in the document.
        expect(screen.getByText('Select Item')).toBeInTheDocument()

        // Simulates changing the value of a dropdown to select an item and then clicking the 'Delete' button.
        fireEvent.change(screen.getByTestId('drop-down'), { target: { value: '1' } }) 
        fireEvent.click(screen.getByText('Delete'))

        // Waits for the mockDeleteItem function to be called with the expected argument ('1') and asserts the call.
        await waitFor(() => {
            expect(mockDeleteItem).toHaveBeenCalledWith('1')
        });

        // Asserts that after deletion, the dropdown's value is set to 'disabled', indicating no item is selected.
        expect(screen.getByTestId('drop-down').value).toBe('disabled')
    });
});



