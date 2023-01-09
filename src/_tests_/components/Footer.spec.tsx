import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import Footer from '../../components/Footer'

jest.mock('next/router', () => require('next-router-mock'));

const mockData: never[] = []

describe("Footer", () => {
  it("Footer should render properly", () => {
    render(<Footer blogFooter={mockData}  />);
    expect(screen.getByTestId('footerMainDiv')).toBeInTheDocument(); 
    // expect(screen.getByTestId('paragraphOneFooter')).toBeInTheDocument();   
    // expect(screen.getByTestId('BlogModal')).toBeInTheDocument();   
    // expect(screen.getByTestId('blogsDiv')).toBeInTheDocument();   

  });
});
