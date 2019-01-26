import isRefSupported from "../features/ref.js";

test("Feature Detect ref", () => {
  expect(isRefSupported).toBe(true);
});
