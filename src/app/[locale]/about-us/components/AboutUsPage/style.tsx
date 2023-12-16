import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const AboutUsPageWrapper = styled.div`
  margin-top: 2rem;
  img {
    max-width: 100%;
  }
  h2 {
    font-family: Univers LT Std;
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0.355em;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
  }
`;

export const Card = styled.div`
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid #3434344d;
  margin: 0.5rem 0;
  background: #fff;
  padding-right: 7rem;
`;
