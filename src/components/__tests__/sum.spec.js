import {sum} from "../sum";

test("sum should be correct", () => {
  const total = sum(2, 3);
  //Assertion
  expect(total).toBe(5);
});
