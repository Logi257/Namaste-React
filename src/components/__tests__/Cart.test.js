import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_MENU_DATA from "../../components/mocks/mockAPIMenu.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU_DATA);
    },
  });
});

it("Should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText(
    "Party Specials (Save upto 37%) (2)"
  );

  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("food-items");

  expect(foodItems).toHaveLength(2);
  //   expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  // const cartContainer = screen.getByTestId("cart-items");

  // expect(cartContainer)
  //   .getByText("Classic Family Feast for 4 - Veg")
  //   .toBeInTheDocument();

  // expect(cartContainer).getByText("11Pc Boneless Wings").toBeInTheDocument();
});
