import { ref } from "../index.js";

test("Feature Detect ref", () => {
  expect(ref).toBe(true);
});
