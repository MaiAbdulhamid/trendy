import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const SliderContainer = styled.div`

  .product--main-thumb--slider {
    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.28); */
    margin-bottom: 20px;
    border-radius: 5px;
    img{
      border-radius: 5px;
    }
  }
  .product--thumb--slider .swiper-slide {
    padding: 0 3px;
    &.swiper-slide-thumb-active {
      img {
        border: 1px solid ${theme.colors.primaryColor};
      }
    }
    img {
      /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.28); */
      margin: 10px 0;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid transparent;
      transition: 0.14s ease-in-out;
    }
  }
`;

