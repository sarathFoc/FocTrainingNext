import React from 'react'
import { render, screen } from '@testing-library/react'  
import "@testing-library/jest-dom"
import Home from './home'
// import Testing from '../../src/pages/testing'

const data = [
  {
    metadata: { tags: [] },
    sys: {
      space: [Object],
      id: '5ShF6frts704Hs7JeSgezu',
      type: 'Entry',
      createdAt: '2022-12-25T19:58:47.542Z',
      updatedAt: '2023-01-05T04:08:22.389Z',
      environment: [Object],
      revision: 3,
      contentType: [Object],
      locale: 'en-US'
    },
    fields: {
      blogHeaderText: 'Focaloid Talks',
      friendlyName: 'blogHeader',
      logOut: 'Log Out'
    }
  }
]


describe("home page", () => {
  it("home page should render properly", () => {
    render(<Home blogHeader={data}/>);
    const navBar = screen.getByTestId('sign-in-head')
    expect(navBar).toBeInTheDocument();   
  });
});
