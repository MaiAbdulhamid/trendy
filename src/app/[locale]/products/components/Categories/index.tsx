import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesContainer } from "./style";
import CircleCard from "../../../components/CircleCard";

export default function Categories({ record }: any) {
  return (
    <>
      <CategoriesContainer>
        <Swiper
          slidesPerView={6}
          draggable={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 5,
            },
            1150: {
              slidesPerView: 6,
            },
          }}
        >
          {record.map((category: any) => (
            <SwiperSlide key={category.id}>
              <CircleCard
                to={`?category_id[]=${category.id}`}
                item={category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CategoriesContainer>
    </>
  );
}
