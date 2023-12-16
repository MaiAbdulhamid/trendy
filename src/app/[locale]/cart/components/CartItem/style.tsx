import { Flex } from "@/app/[locale]/components/Grids";
import devices from "@/app/[locale]/utils/devices";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";


export const Wrapper = styled(Flex)`
  /* padding: 10px 12px;
border-radius: 8px; */
  .product--name{
    width: 484px;
  }
  .delete--button {
    border-color: ${theme.colors.primaryColor};
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
      border-color: transparent;
    }
  }
  .product--description {
    width: 100%;
  }

  .product--img {
    img{
      border-radius: 5px;
    }
    & > div {
      padding: 10px 5px;
    }

    ${devices.mediumMax} {
      figure,
      img,
      .mantine-Image-root {
        height: 50px !important;
        width: 50px !important;
      }

      .product--action {
        display: block;
      }
    }
  }

  .product--brand {
    margin: 10px 0;
  }

  .product--options {
    margin-bottom: 10px;
    .badge--option {
      background: ${theme.colors.primaryColor};
      color: #fff;
      padding: 15px 20px;
      border-radius: 10px;
    }
  }

  .product--action {
    /* max-width: 300px; */
    & > button {
      float: left;
      svg {
        //margin-right: 10px;
      }
    }

    ${devices.mediumMax} {
      display: block;
    }

  }
`;

export const CartItemWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  .quantity--input--container {
      width: fit-content;
      input {
        max-width: 40px;
      }
    }
`;

export const PercentCard = styled.div`
  background: #DEB1562E;
  border-radius: 5px;
  padding: 5px;
  color: ${theme.colors.primaryColor};
`;
