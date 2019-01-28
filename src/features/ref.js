import React from "react";
import styled from "styled-components";
import { isForwardRef } from "react-is";

const StyledComponent = styled.div``;
const ref = isForwardRef(<StyledComponent />);

export default ref;
