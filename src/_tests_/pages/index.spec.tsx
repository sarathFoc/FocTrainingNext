import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import SignUpPage from '../../pages/index'

jest.mock('next/router', () => require('next-router-mock'));

describe("signUp page", () => {
  it("signUp page should render properly", () => {
    render(<SignUpPage />);
    expect(screen.getByTestId('container')).toBeInTheDocument(); 
    // expect(screen.getByTestId('secondaryDiv')).toBeInTheDocument();   
    // expect(screen.getByTestId('BlogModal')).toBeInTheDocument();   
    // expect(screen.getByTestId('blogsDiv')).toBeInTheDocument();   

  });
});
