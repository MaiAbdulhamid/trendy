import { css } from "@emotion/react";
import CSS from "csstype";

// This function calculates the gap between flex container children incase the flex gap property is not supported in old browsers

const flexGapCalculator = (gap: CSS.Property.Gap, direction = "row") => {
  let gapStyleProperties;
  if (direction === "row") {
    gapStyleProperties = css`
      margin: 0 calc(${gap} / 2);
      &:first-of-type: {
        &:lang(en) {
          margin-left: 0;
        }
        &:lang(ar) {
          margin-right: 0;
        }
      }
      &:last-child: {
        &:lang(ar) {
          margin-left: 0;
        }
        &:lang(en) {
          margin-right: 0;
        }
      }
    `;
  } else {
    gapStyleProperties = css`
      margin: calc(${gap} / 2) 0;
      &:first-of-type: {
        margin-top: 0;
      }
      &:last-of-type: {
        margin-bottom: 0;
      }
    `;
  }

  return gapStyleProperties;
};

export default flexGapCalculator;
