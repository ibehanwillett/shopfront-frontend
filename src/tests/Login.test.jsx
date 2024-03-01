import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import UserProvider from '../app-context/UserContext'
import {MemoryRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'


describe('Login Component', () => {
    // The purpose of this test is to verify that the login button is rendered as part of the LoginForm component.
    it('renders the login button', () => {
        // The render function is called with the LoginForm component wrapped in both UserProvider and MemoryRouter components.
        render(
            <MemoryRouter>
                <UserProvider>
                    <LoginForm />
                </UserProvider>
            </MemoryRouter>
        );
        // Attempts to find an element with the text 'Log In' within the rendered output.
        // This is expected to be the login button within the LoginForm component.
        const loginButton = screen.getByText('Log In')
        
        // Uses an assertion to check that the loginButton (or an element with the text 'Log In') is present in the document.
        // If the element is found, it means the login button was correctly rendered, and the test passes.
        expect(loginButton).toBeInTheDocument()
    });

})