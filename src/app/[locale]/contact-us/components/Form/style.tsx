import devices from "../../../utils/devices";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  padding: 28px 36px 28px 36px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.gray[200]};
  margin: 2rem 0;
  .input-wrapper{
    .wrapper{

      height: 85px;
      border-radius: 5px;
    }
  }
  textarea{
    height: 361px;
    border-radius: 5px;

  }
  button{
    height: auto;
    padding: 42px;
    width: 417px;
    margin-top: 1rem;
    ${devices.largeMax}{
      width: auto;
      padding: 20px;
    }
  }
`;
