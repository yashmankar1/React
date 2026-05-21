import { sum } from "../sum";

test("Sum function should calculate the sum of the two numbers", () => {
  const result = sum(2, 4);
  expect(result).toBe(6);
});
