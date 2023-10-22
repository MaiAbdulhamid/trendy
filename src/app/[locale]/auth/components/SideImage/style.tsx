"use client";
import devices from "../../../utils/devices";
import styled from "@emotion/styled";

export const ImageContainer = styled.div<{ extraPadding?: boolean }>`
  min-height: 100%;
  img {
    max-width: 100%;
    margin: 56px 0;
    min-height: 100%;
    object-fit: fill;
  }

  ${devices.xSmall} {
    display: none
  } 
  ${devices.medium} {
    display: none
  }
  ${devices.large} {
    display: block
  }
  /* ${devices.mediumMax} {
    display: block
  } */
`;
