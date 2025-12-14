import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_API_DATA from "../../components/mocks/mockAPIData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_API_DATA);
    },
  });
});

it("Should search res card for pizza input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsbeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsbeforeSearch).toHaveLength(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const inputBox = screen.getByTestId("input-box");

  fireEvent.change(inputBox, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch).toHaveLength(1);
});

it("Should filtered restaurants only", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(filterBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter).toHaveLength(3);
});
