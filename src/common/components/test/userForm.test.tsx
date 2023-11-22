import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserForm from '../userForm';

describe('UserForm component', () => {
  it('renders without errors', () => {
    render(<UserForm lastId={1} handler={() => {}} />);
    // Add more assertions if needed
  });

  it('updates form data when input fields are changed', () => {
    render(<UserForm lastId={1} handler={() => {}} />);
    
    fireEvent.change(screen.getByLabelText('Fullname'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'john_doe' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Website'), { target: { value: 'www.example.com' } });
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St, City' } });

    expect(screen.getByLabelText('Fullname') as HTMLInputElement).toBe('John Doe');
    expect(screen.getByLabelText('Email')as HTMLInputElement).toBe('john.doe@example.com');
    expect(screen.getByLabelText('Username') as HTMLInputElement).toBe('john_doe');
    expect(screen.getByLabelText('Phone Number') as HTMLInputElement).toBe('1234567890');
    expect(screen.getByLabelText('Website') as HTMLInputElement).toBe('www.example.com');
    expect(screen.getByLabelText('Address')as HTMLInputElement).toBe('123 Main St, City');
  });

  it('calls handler function with form data when submitted', async () => {
    const handlerMock = jest.fn();
    render(<UserForm lastId={1} handler={handlerMock} />);
    
    fireEvent.change(screen.getByLabelText('Fullname'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'john_doe' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Website'), { target: { value: 'www.example.com' } });
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St, City' } });

    fireEvent.click(screen.getByText('Add User'));

    // Use `waitFor` to wait for asynchronous operations to complete
    await waitFor(() => {
      expect(handlerMock).toHaveBeenCalledWith({
        id: 2,
        username: 'john_doe',
        email: 'john.doe@example.com',
        name: 'John Doe',
        phoneNumber: '1234567890',
        address: '123 Main St, City',
        website: 'www.example.com'
      });
    });
  });

  it('resets form data after submission', async () => {
    const handlerMock = jest.fn();
    render(<UserForm lastId={1} handler={handlerMock} />);
    
    fireEvent.change(screen.getByLabelText('Fullname'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'john_doe' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Website'), { target: { value: 'www.example.com' } });
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St, City' } });

    fireEvent.click(screen.getByText('Add User'));

    // Use `waitFor` to wait for asynchronous operations to complete
    await waitFor(() => {
      expect(handlerMock).toHaveBeenCalled();
      expect(screen.getByLabelText('Fullname')as HTMLInputElement).toBe('');
      expect(screen.getByLabelText('Email')as HTMLInputElement).toBe('');
      expect(screen.getByLabelText('Username') as HTMLInputElement).toBe('');
      expect(screen.getByLabelText('Phone Number') as HTMLInputElement).toBe('');
      expect(screen.getByLabelText('Website') as HTMLInputElement).toBe('');
      expect(screen.getByLabelText('Address') as HTMLInputElement).toBe('');
    });
  });
});
