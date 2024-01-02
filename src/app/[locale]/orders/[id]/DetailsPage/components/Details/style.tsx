import TextInput from "@/app/[locale]/components/Form/TextInput";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  padding: 19px;
  border-radius: 5px;
  gap: 10px;
  background: #ffffff;
`;
export const Padding = styled.div`
  padding: 1rem 0;
`;
export const Card = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #adadad80;
`;
export const OrderImage = styled.div`
  border-radius: 5px;
  min-width: 147px;
  height: 115px;
  img {
    object-fit: cover;
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    border-radius: 5px;
  }
`;

export const Badge = styled.div<any>`
  background-color: ${({color}) => color ?? theme.colors.primaryColor};
  border-radius: 5px;
  padding: 0.5rem;
  color: ${theme.colors.white};
`;
