import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Thumbs } from "swiper/modules";
import { SliderContainer } from "./style";
import Image from "next/image";

export default function ProductThumb({ product }: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const images = product?.images;

  return (
    <>
      <SliderContainer>
        {thumbsSwiper && (
          <Swiper
            // spaceBetween={5}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Thumbs]}
            className="product--main-thumb--slider"
          >
            {images.map((image: any, index: number) => (
              <SwiperSlide key={`main-thumb-${index}`}>
                <img
                  src={image?.images}
                  style={{ width: "100%" }}
                  className="img-responsive"
                  alt="main-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {images && (
          <Swiper
            onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
            freeMode
            spaceBetween={8}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="product--thumb--slider"
          >
            {images.map((image: any, index: number) => (
              <SwiperSlide key={image.id}>
                <img
                  src={image?.images}
                  className="img-responsive"
                  alt="images"
                  width={140}
                  height={140}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SliderContainer>
    </>
  );
}
