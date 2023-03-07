import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/components/LamaDev/App';

describe("Lama Dev App - App", () => {
  test('renders lear react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders 3 list items', () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(listItems.length).toBe(3);
  });
  test('renders title', () => {
    render(<App />);
    const title = screen.getByTestId("mytestid");
    expect(title).toBeInTheDocument();
  });
  test('sum should be 6', () => {
    render(<App />);
    const sum = screen.getByTitle("sum");
    expect(sum.textContent).toBe("6");
  });
});
describe("Lama Dev - Login", () => {

});