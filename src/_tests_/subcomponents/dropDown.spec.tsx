import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import DropDown from '../../subcomponents/dropDown'

// jest.mock('next/router', () => require('next-router-mock'));

// const mockData: never[] = []

describe("DropDown", () => {
  it("DropDown should render properly", () => {
    render(<DropDown />);
    expect(screen.getByTestId('dropDown')).toBeInTheDocument(); 
    // expect(screen.getByTestId('dropDownItem')).toBeInTheDocument(); 

    
  });
});
