import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import LogInPage from '../../pages/logIn'

jest.mock('next/router', () => require('next-router-mock'));


describe("LogIn page", () => {
  it("LogIn page should render properly", () => {
    render(<LogInPage />);
    expect(screen.getByTestId('container')).toBeInTheDocument(); 
    // expect(screen.getByTestId('secondaryDiv')).toBeInTheDocument();   
    // expect(screen.getByTestId('BlogModal')).toBeInTheDocument();   
    // expect(screen.getByTestId('blogsDiv')).toBeInTheDocument();   

  });
});
