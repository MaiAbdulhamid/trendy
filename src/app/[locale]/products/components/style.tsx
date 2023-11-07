import styled from "@emotion/styled";

export const FiltersWrapper = styled.div`
  margin-top: 3rem;
`;

export const MultiRangeSliderWrapper = styled.div`
  .multi-range-slider {
    border: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0px 20px;
    .bar-right, .bar-left {
      box-shadow: none;
    }
    .thumb::before {
      width: 14px;
      height: 14px;
      border: 0;
      box-shadow: none;
      margin: -4px -12px;
    }
    .bar-inner{
      border: 0;
      box-shadow: none;
    }
  }
`;
