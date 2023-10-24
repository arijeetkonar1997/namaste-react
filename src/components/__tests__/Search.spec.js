import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body.js";
import { initailMockData } from "../mocks/InitialMockData.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(initailMockData),
  })
);
it("Should render search restaurant and top rated restaurant",async () => {

  await act(async() => render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>))

  const cardsBeforeSearch = screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(18)

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Biryani" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard")

  expect(cardsAfterSearch.length).toBe(3)

  expect(searchBtn).toBeInTheDocument();
});

it("Should render top rated restaurants",async () => {

  await act(async() => render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>))

  const topRatedButton = screen.getByRole("button",{name:"Top Rated Restaurant"})

  fireEvent.click(topRatedButton)

  const topRatedRestaurants = screen.getAllByTestId("resCard")

  expect(topRatedRestaurants.length).toBe(12)
});