import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import Home from '../../src/pages/home'
// import Testing from '../../src/pages/testing'


describe("home page", () => {
  it("home page should render properly", () => {
    render(<Home/>);
    const navBar = screen.getByTestId('sign-in-head')
    expect(navBar).toBeInTheDocument();
    
    // render(<Testing />);
    // const header = screen.getByRole("heading");
    // const headerText = "Hello world";

    // expect(header).toHaveTextContent(headerText);
  });
});
