import Is from "@mongez/supportive-is";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductsContainer, SliderContainer } from "./style";
import { ProductsSliderProps } from "./type";
import URLS from "../../utils/urls";
import theme from "../../utils/theme";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";

export default function ProductsSlider({
  products,
  title,
  enableViewAllButton = true,
  widgetId,
  color,
}: ProductsSliderProps) {

  if (Is.empty(products)) return null;

  return (
    <>
      <ProductsContainer>
        {title && 
          <SectionTitle
            to={`${URLS.products}?widget_id=${widgetId}`}
            title={title}
            enableViewAll={enableViewAllButton}
            color={theme.colors.black[300]}
          />
        }
        <SliderContainer>
          <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {products.map((product: any) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} color={color}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderContainer>
      </ProductsContainer>
    </>
  );
}
