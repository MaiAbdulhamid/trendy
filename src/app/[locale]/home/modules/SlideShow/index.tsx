import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ModuleProp } from "../../types";
import { resolveLink } from "../../../utils/general";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/svgs";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderContainer, SliderWrapper } from "./style";

export default function SlideShow({ record }: ModuleProp) {
  return (
    <SliderContainer>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={true}
        navigation={{
          prevEl: ".custom--prev",
          nextEl: ".custom--next",
        }}
      >
        {record.map((banner: any) => (
          <SwiperSlide key={banner.id}>
            <SliderWrapper>
              <Link href={resolveLink(banner)}>
                <img src={banner.image} className="full-width" />
              </Link>
            </SliderWrapper>
          </SwiperSlide>
        ))}

        <div className="custom--prev">
          <ArrowLeftIcon />
        </div>
        <div className="custom--next">
          <ArrowRightIcon />
        </div>
      </Swiper>
    </SliderContainer>
  );
}
