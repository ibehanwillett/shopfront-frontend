import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import UserProvider from '../app-context/UserContext.jsx'


beforeEach(() => {
  window.fetch = vi.fn(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve({}),
    })
  );
});

describe('LoginForm', () => {
  it('allows a user to log in', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <LoginForm />
        </UserProvider>
      </MemoryRouter>
    )


    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Log In' }));

    const loginButton = await screen.findByRole('button', { name: 'Log In' })
    expect(loginButton.disabled).toBe(false)
  })
})
