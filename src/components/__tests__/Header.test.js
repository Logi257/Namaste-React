import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render login button in the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Best Practice
  const loginButton = screen.getByRole("button");

  // When there is more button and you want to target one out of it
  //const loginButton = screen.getByRole("button", { name: "Login" });

  //const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should check Cart item is 0 in the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartLength = screen.getByText("Cart (0 items)");

  expect(cartLength).toBeInTheDocument();
});

it("Should Render Cart item  in the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartLength = screen.getByText(/Cart/);

  expect(cartLength).toBeInTheDocument();
});

it("Should Check where login text changes to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
