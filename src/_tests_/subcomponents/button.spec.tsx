import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import Button from '../../subcomponents/button'

// jest.mock('next/router', () => require('next-router-mock'));

// const mockData: never[] = []

describe("Button", () => {
  it("Button should render properly", () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument(); 
  });
});
