import React from "react";
import styled from "styled-components";
import { isForwardRef } from "react-is";

const StyledComponent = styled.div``;

export default (refOrInnerRef) => isForwardRef(<StyledComponent />) ? { ref: refOrInnerRef } : { innerRef: refOrInnerRef };
