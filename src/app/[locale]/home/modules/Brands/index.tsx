import { Swiper, SwiperSlide } from "swiper/react";

import { BrandContainer, BrandsContainer } from "./style";
import SectionTitle from "../../../components/SectionTitle";
import URLS from "../../../utils/urls";
import { ModuleProp } from "../../types";
import RectangularCard from "../../../components/RectangularCard";
import theme from "../../../utils/theme";

export default function Brands({ record, title }: ModuleProp) {
  return (
    <>
      <BrandsContainer>
        <SectionTitle
          color={theme.colors.black[300]}
          to={URLS.products}
          title={title}
        />

        <Swiper
          dir="rtl"
          slidesPerView={5}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 3,
            },
            1150: {
              slidesPerView: 4,
            },
          }}
        >
          {record.map((brand: any) => (
            <SwiperSlide key={brand.id}>
              <BrandContainer>
                <RectangularCard
                  to={`${URLS.products}?brand_id[]=${brand.id}`}
                  item={brand}
                />
              </BrandContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </BrandsContainer>
    </>
  );
}
