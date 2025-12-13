import { sum } from "../sum";

test("Sum function should add the two given number", () => {
  const result = sum(4, 5);

  //Assertion
    expect(result).toBe(9);
});
