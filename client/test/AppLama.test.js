import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/components/LamaDev/App';
import Login from '../src/components/LamaDev/Login';

const userData = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => Promise.resolve({
      data: userData,
    }),
  },
}));

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
  test("username input should be rendered", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument()
  })
  test("password input should be rendered", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument()
  })
  test("button input should be rendered", () => {
    render(<Login />);
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeInTheDocument()
  })
  test("username input should be empty", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl.value).toBe("")
  })
  test("password input should be empty", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl.value).toBe("")
  })
  test("button should be disabled if form not filled", () => {
    render(<Login />);
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeDisabled();
  })
  test("Loading should not be rendered on button", () => {
    render(<Login />);
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).not.toHaveTextContent(/loading.../i);
  })
  test("error message should not be visible", () => {
    render(<Login />);
    const errorEl = screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
  })
  test("username input should change", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = "test";
    fireEvent.change(userInputEl, { target: { value: testValue } });
    expect(userInputEl.value).toBe(testValue);
  })
  test("password input should change", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    expect(passwordInputEl.value).toBe(testValue);
  })

  test("button should be enabled if form is filled", () => {
    render(<Login />);
    const testValue = "test";
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).not.toBeDisabled();
  })
  test("Loading should be rendered on button when clicked", () => {
    render(<Login />);
    const testValue = "test";
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const buttonInputEl = screen.getByRole("button");

    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonInputEl);

    expect(buttonInputEl).toHaveTextContent(/loading.../i);
  })
  test("Loading should be not rendered on button after fetching", async () => {
    render(<Login />);
    const testValue = "test";
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const buttonInputEl = screen.getByRole("button");

    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonInputEl);

    await waitFor(() => expect(buttonInputEl).not.toHaveTextContent(/loading.../i)
    );
})
  test("User should be rendered on button after fetching", async () => {
    render(<Login />);
    const testValue = "test";
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const buttonInputEl = screen.getByRole("button");

    fireEvent.change(userInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonInputEl);

    const usernameHeading = await screen.findByText(userData.name);
    expect(usernameHeading).toBeInTheDocument();
})
});