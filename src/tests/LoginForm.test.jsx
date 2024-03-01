import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import UserProvider from '../app-context/UserContext.jsx'


beforeEach(() => {
  // Mocks the global fetch function using vi.fn() from Vitest, to simulate a successful fetch request.
  window.fetch = vi.fn(() => 
    Promise.resolve({
      status: 200, // Simulates a successful HTTP response status.
      json: () => Promise.resolve({}), // Simulates an empty JSON response body.
    })
  );
});

describe('LoginForm', () => {
  // Defines a test case to verify that a user can log in using the LoginForm component.
  it('allows a user to log in', async () => {
    // Renders the LoginForm component within the necessary providers. MemoryRouter is used to mock routing, and UserProvider is assumed to provide user-related context.
    render(
      <MemoryRouter>
        <UserProvider>
          <LoginForm />
        </UserProvider>
      </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' }, // Simulates entering an email address into the input field.
    });
    // Simulates user input into the password field.
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' }, // Simulates entering a password into the input field.
    })

    // Simulates clicking the login button.
    fireEvent.click(screen.getByRole('button', { name: 'Log In' }))

    // Waits for the login button to be found in the document and stores it in the loginButton variable. 
    const loginButton = await screen.findByRole('button', { name: 'Log In' })

    // Asserts that the login button is not disabled.
    expect(loginButton.disabled).toBe(false)
  })
})
