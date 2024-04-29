import TextInput from "@/app/[locale]/components/Form/TextInput";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  /* top: 332px; */
  /* left: 840px; */
  padding: 19px;
  border-radius: 5px;
  gap: 10px;
  background: #ffffff;
`;
export const PromoCodeWrapper = styled.div`
  background-color: #eceef0;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  button {
    background-color: #deb156;
    height: 44px;
    width: 125px;
  }
`;
export const PromoCode = styled.input`
  background: transparent;
  border: none;
  outline: none;
`;
export const OrderSummaryWrapper = styled.div`
  border: 1px solid #ADADAD80;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  button{
    height: 56px;
    width: 100%;
    margin: 1rem 0;
    p{
      text-transform: uppercase;
    }
  }
`