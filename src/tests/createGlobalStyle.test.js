import isCreateGlobalStyleSupported from "../features/createGlobalStyle.js";

test("Feature Detect createGlobalStyle", () => {
  expect(isCreateGlobalStyleSupported).toBe(true);
});
