import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import NavBar from '../../components/NavBar'

jest.mock('next/router', () => require('next-router-mock'));

const mockData: never[] = []

describe("NavBar", () => {
  it("NavBar should render properly", () => {
    render(<NavBar blogHeader={mockData}   />);
    expect(screen.getByTestId('navbarparentNode')).toBeInTheDocument(); 
    // expect(screen.getByTestId('paragraphOneFooter')).toBeInTheDocument();   
    // expect(screen.getByTestId('BlogModal')).toBeInTheDocument();   
    // expect(screen.getByTestId('blogsDiv')).toBeInTheDocument();   

  });
});
