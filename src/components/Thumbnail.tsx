import React from "react";
import styled from "@emotion/styled";

import { icon } from "../assets/index";

export const Thumbnail: React.FCX = () => {
  return <StyledImg src={icon} alt="icon" />;
};

export const StyledImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 1px #eee solid;
`;
