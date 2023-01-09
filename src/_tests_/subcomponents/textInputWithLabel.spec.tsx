import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import TexTInputWithLabel from '../../subcomponents/textInputWithLabel'

// jest.mock('next/router', () => require('next-router-mock'));

const mockData= {}

describe("TexTInputWithLabel", () => {
  it("TexTInputWithLabel should render properly", () => {
    render(<TexTInputWithLabel each={mockData} />);
    expect(screen.getByTestId('textInput')).toBeInTheDocument(); 
  });
});
