import styled from "@emotion/styled";

export const BoxShadow = styled.div`
  box-shadow: 0px 0.5px 2px 0 rgba(0, 0, 0, 0.29);;
`;


type SectionBoxProps = {
  radius?: number
}

export const SectionBox = styled(BoxShadow)<SectionBoxProps>`
  padding: 20px;
  border-radius: ${({ radius }) => radius || 10}px;
  position: relative;
`;
