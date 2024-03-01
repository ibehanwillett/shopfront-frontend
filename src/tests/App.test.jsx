import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'


describe('App Component', () => {
    
    // Defines a single test case within the suite using Jest's it function.
    it('renders the Home component', () => {
        // The render function returns an object containing various properties and methods to interact with the rendered output.
        const { container } = render(<App/>)
        
        // The test assertion checks if there's an h2 element within the rendered App component that contains the text 'WELCOME'.
        // expect is a Jest matcher that checks if a certain condition is met.
        // container.querySelector('h2') uses the DOM's querySelector method to find the first h2 element within the rendered App component.
        // .toHaveTextContent('WELCOME') is a matcher from Jest DOM (an extension of Jest used with React Testing Library) that checks if the selected element contains the specified text content.
        expect(container.querySelector('h2')).toHaveTextContent('WELCOME')
    })
})


