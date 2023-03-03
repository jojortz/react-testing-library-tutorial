import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/components/App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    /****** Search Types */
    /** getByText **/
    // fails
    //expect(screen.getByText('Search')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument();

    // succeeds
    //expect(screen.getByText(/Search/)).toBeInTheDocument();

    /** getByRole **/
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    /****** Search Variants */
    /** queryBy */
    //So every time you are asserting that an element isn't there, use queryBy
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    /** findBy */
    //The findBy search variant is used for asynchronous elements which will be there eventually.
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();

    /**
     * All search variants can be extended with the All word:
        -getAllBy
        -queryAllBy
        -findAllBy
      Whereas all of them return an array of elements and can be associated with the search types again.
     */
  });
});
describe('true is truthy and false is falsy', () => {
  it('true is truthy', () => {
    expect(true).toBe(true);
  });

  it('false is falsy', () => {
    expect(false).toBe(false);
  });
});
