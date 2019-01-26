import React from "react";
import styled from "styled-components";
import { isForwardRef } from "react-is";

const StyledComponent = styled.div``;
const isRefSupported = isForwardRef(<StyledComponent />);

const ref = isRefSupported;

export default ref;
