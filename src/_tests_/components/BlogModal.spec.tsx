import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import BlogModal from '../../components/BlogModal'

jest.mock('next/router', () => require('next-router-mock'));

const mockData: never[] = []

describe("BlogModal", () => {
  it("BlogModal should render properly", () => {
    render(<BlogModal blogdata={mockData} showBlogModal={false} />);
    expect(screen.getByTestId('mainDiv')).toBeInTheDocument(); 
    // expect(screen.getByTestId('modal')).toBeInTheDocument();   
    // expect(screen.getByTestId('BlogModal')).toBeInTheDocument();   
    // expect(screen.getByTestId('blogsDiv')).toBeInTheDocument();   

  });
});
