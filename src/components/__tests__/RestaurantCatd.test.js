import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMockData.json";
import "@testing-library/jest-dom"

it("Should render the restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resCard = screen.getByText("Chinese Wok")

  expect(resCard).toBeInTheDocument()
});
