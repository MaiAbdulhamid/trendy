import Is from "@mongez/supportive-is";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductsContainer, SliderContainer } from "./style";
import { SpecialDealsSliderProps } from "./type";
import URLS from "../../utils/urls";
import theme from "../../utils/theme";
import SectionTitle from "../SectionTitle";
import SpecialDealsCard from "../SpecialDealsCard";

export default function SpecialDealsSlider({
  products,
  title,
  enableViewAllButton = false,
  widgetId,
}: SpecialDealsSliderProps) {

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
                slidesPerView: 2,
              },
              550: {
                slidesPerView: 3,
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
              <SwiperSlide>
                <SpecialDealsCard product={product}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderContainer>
      </ProductsContainer>
    </>
  );
}
