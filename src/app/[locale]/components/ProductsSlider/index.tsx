import Is from "@mongez/supportive-is";
import { Scrollbar, Autoplay } from "swiper/modules";
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
            // dir="rtl"
            spaceBetween={20}
            slidesPerView={3}
            // autoplay={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
              1150: {
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
