import { createGlobalStyle } from "../index.js";

test("Feature Detect createGlobalStyle", () => {
  expect(createGlobalStyle).toBe(true);
});
