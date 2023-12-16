import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const FaqPageWrapper = styled.div`
  margin-top: 2rem;
`;

export const QuestionsWrapper = styled.div`
  padding: 28px 36px 28px 36px;
  border-radius: 5px;
  border: 1px solid #3434344d;
  margin: 2rem 0;
  .mantine-Accordion-item {
    button {
      border-radius: 5px;
      height: 85px;
      border: 1px solid #3434344d;
      background: #FFFFFF;
    }
  }
`;
