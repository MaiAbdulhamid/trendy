import { trans } from "@mongez/localization";
import { rtrim } from "@mongez/reinforcements";
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
}: ProductsSliderProps) {

  if (Is.empty(products)) return null;

  return (
    <>
      <ProductsContainer>
        <SectionTitle
          to={`${URLS.category.dashboard}?widget_id=${widgetId}`}
          title={trans(title)}
          enableViewAll={enableViewAllButton}
          color={theme.colors.black[300]}
        />
        <SliderContainer>
          <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            dir="rtl"
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
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderContainer>
      </ProductsContainer>
    </>
  );
}
