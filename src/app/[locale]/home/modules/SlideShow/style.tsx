import { Container } from "@/app/[locale]/components/Grids";
import { H3 } from "@/app/[locale]/components/Typography";
import devices from "@/app/[locale]/utils/devices";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const SliderContainer = styled(Container)`
  .swiper-wrapper, .swiper-slide {
    width: 100%;
    height: 500px;
  }
  .custom--prev,
  .custom--next {
    width: 71px;
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #adafb1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    z-index: 100;
  }
  .custom--prev {
    left: 1rem;
  }
  .custom--next {
    right: 1rem;
  }
  .swiper-pagination-bullet {
    width: 28px;
    height: 10px;
    border-radius: 5px;
    opacity: 1;
    background: #FFFFFF80;
  }
  .swiper-pagination-bullet-active {
    width: 65px;
    background-color: ${theme.colors.primaryColor}
  }
  ${devices.smallMax} {
    .custom--prev,
    .custom--next {
      width: 50px;
      height: 50px;
    }
  }
`;

export const SliderWrapper = styled.div`
  label: slider-wrapper;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    object-position: center;
  }
`;
