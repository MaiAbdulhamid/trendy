import { Swiper, SwiperSlide } from "swiper/react";

import { BrandContainer, BrandsContainer } from "./style";
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import URLS from "@/app/[locale]/utils/urls";
import CircleCard from "@/app/[locale]/components/CircleCard";
import { ModuleProp } from "../../types";
import RectangularCard from "@/app/[locale]/components/RectangularCard";
import theme from "@/app/[locale]/utils/theme";

export default function Brands({ record, title }: ModuleProp) {
  return (
    <>
      <BrandsContainer>
        <SectionTitle
          color={theme.colors.black[300]}
          to={URLS.category.dashboard}
          title={title}
        />

        <Swiper
          dir="rtl"
          slidesPerView={5}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 4,
            },
            1150: {
              slidesPerView: 4,
            },
          }}
        >
          {record.map((brand: any) => (
            <SwiperSlide>
              <BrandContainer>
                <RectangularCard
                  to={`${URLS.category.dashboard}?brand_id[]=${brand.id}`}
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
