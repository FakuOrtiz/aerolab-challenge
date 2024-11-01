import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";

const GameCarousel = ({ gallery }: { gallery: string[] }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={8}
        modules={[Navigation, Pagination]}
        className={styles.swiper}
      >
        {gallery.map((imageId) => {
          return (
            <SwiperSlide key={imageId} className={styles.imageContainer}>
              <Image
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.webp`}
                alt={imageId}
                fill
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {gallery.length > 3 && (
        <>
          <button
            className={`${styles.customPrev} ${styles.navButton}`}
            onClick={() => swiperRef?.current?.slidePrev()}
          >
            {"<"}
          </button>

          <button
            className={`${styles.customNext} ${styles.navButton}`}
            onClick={() => swiperRef?.current?.slideNext()}
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default GameCarousel;
