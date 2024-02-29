import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ArtistPortal from '../components/ArtistPortal/ArtistPortal'


describe('App Component', () => {

    it('renders the Artist Portal component', () => {
        const { container } = render(<ArtistPortal/>)
        expect(container.querySelector('h2')).toHaveTextContent('Hi, Nicole')
    })
})


describe('CreateItem Component', () => {

    it('ItemCreate Component', () => {
        const { container } = render(<ArtistPortal/>)
        expect(container.querySelector('option')).toHaveTextContent('Item Category')
    })

})




