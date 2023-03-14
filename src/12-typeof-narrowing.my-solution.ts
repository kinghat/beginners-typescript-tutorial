import { expect, it } from "vitest";
import { object } from "zod";

const coerceAmount = (amount: number | { amount: number }) => typeof amount === "object" ? amount.amount : amount;

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});