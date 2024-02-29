import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import UserProvider from '../app-context/UserContext'
import {MemoryRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'

describe('Login Component', () => {
    it('renders the login button', () => {
        render(
            <MemoryRouter>
                <UserProvider>
                    <LoginForm />
                </UserProvider>
            </MemoryRouter>
        );
        const itemName = screen.getByText('Log In')
        expect(itemName).toBeInTheDocument()
    });

})