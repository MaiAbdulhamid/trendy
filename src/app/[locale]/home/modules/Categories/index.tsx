import { Swiper, SwiperSlide } from "swiper/react";

import { CategoriesContainer, Title } from "./style";
import URLS from "@/app/[locale]/utils/urls";
import { ModuleProp } from "../../types";
import CircleCard from "@/app/[locale]/components/CircleCard";
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import { useTranslations } from "next-intl";
import theme from "@/app/[locale]/utils/theme";

export default function Categories({ record, title }: ModuleProp) {
  const trans = useTranslations('Home')

  return (
    <>
      <CategoriesContainer>
        <SectionTitle title={title} color={theme.colors.black} />
        <Swiper
          // dir="rtl"
          slidesPerView={6}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 5,
            },
            1150: {
              slidesPerView: 7,
            },
          }}
        >
          {record.map((category: any) => (
            <SwiperSlide key={category.id}>
              <CircleCard
                to={`${URLS.category.dashboard}?category_id[]=${category.id}`}
                item={category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CategoriesContainer>
    </>
  );
}
