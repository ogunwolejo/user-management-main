import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from '../profile';

describe('Profile component', () => {
  it('renders without errors', () => {
    render(<Profile label="Test Label" data="Test Data" handler={() => {}} saveButton={() => {}} />);
    // Add more assertions if needed
  });

  it('displays label and data when not in editable mode', () => {
    render(<Profile label="Test Label" data="Test Data" handler={() => {}} saveButton={() => {}} />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Data')).toBeInTheDocument();
  });

  it('switches to editable mode when edit icon is clicked', () => {
    render(<Profile label="Test Label" data="Test Data" handler={() => {}} saveButton={() => {}} />);

    fireEvent.click(screen.getByTestId('edit-icon'));

    expect(screen.getByPlaceholderText('Test Label')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Data')).toBeInTheDocument();
  });

  it('calls saveUpdate function when Save button is clicked', async () => {
    const saveButtonMock = jest.fn();
    render(<Profile label="Test Label" data="Test Data" handler={() => {}} saveButton={saveButtonMock} />);

    fireEvent.click(screen.getByTestId('edit-icon')); // switch to editable mode
    fireEvent.click(screen.getByText('Save'));

    // Use `waitFor` to wait for asynchronous operations to complete
    await waitFor(() => {
      expect(saveButtonMock).toHaveBeenCalled();
    });
  });
});
