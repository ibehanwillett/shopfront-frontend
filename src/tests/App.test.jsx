import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('App Component', () => {
    it('renders the Home component', () => {
        const { container } = render(<App/>)
        expect(container.querySelector('h3')).toHaveTextContent('HOME')
    })
})