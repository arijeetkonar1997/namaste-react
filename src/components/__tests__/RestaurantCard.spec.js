import { render, screen } from "@testing-library/react";
import { MOCKDATA } from "../mocks/resMockData";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

test("should load rs card component", () => {
  render(<RestaurantCard resData={MOCKDATA} />);
  const resName = screen.getByText("The Grub Club");
  expect(resName).toBeInTheDocument();
});
