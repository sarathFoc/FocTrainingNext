import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import Blogs from '../../components/Blogs'

jest.mock('next/router', () => require('next-router-mock'));

const mockData: never[] = []

describe("Blogs", () => {
  it("Blogs should render properly", () => {
    render(<Blogs blogs={mockData} />);
    // expect(screen.getByTestId('mainDiv')).toBeInTheDocument(); 
    // expect(screen.getByTestId('modal')).toBeInTheDocument();   
    // expect(screen.getByTestId('BlogModal')).toBeInTheDocument();   
    // expect(screen.getByTestId('blogsDiv')).toBeInTheDocument();   

  });
});
