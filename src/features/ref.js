import React from "react";
import { isForwardRef } from "react-is";

const ref = styled => {
  try {
    const StyledComponent = styled.div``;
    return isForwardRef(<StyledComponent />);
  } catch {
    console.error(
      "Wrong type provided. Expected default export from styled-components."
    );
  }
};

export default ref;