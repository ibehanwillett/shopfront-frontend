import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ArtistPortal from '../components/ArtistPortal/ArtistPortal'
import ItemCreate from '../components/ArtistPortal/ItemCreate'
import { ItemsContext } from '../app-context/ItemsContext'
import {MemoryRouter } from 'react-router-dom'


const mockAddItem = vi.fn()

const mockContext = {
    addItem: mockAddItem,
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
    
    it('calls addItem on form submission with values', async () => {
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
        const file = new File(['ooooo'], 'chucknorris.png', { type: 'image/png' });
        fireEvent.change(screen.getByLabelText('Upload Image'), { target: { files: [file] } });


        fireEvent.click(getByText('Add'))

        await waitFor(() => {
            expect(mockAddItem).toHaveBeenCalled();
    })
    })

    
})




