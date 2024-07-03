import { Swiper, SwiperSlide } from 'swiper/react'
import { Movies } from '../components/ui/movies'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Carousel = ({ categorie, movies }) => {
    // const settings = {
    //     spaceBetween: 50,
    //     slidesPerView: 6,
    //     speed: 1000,
    // }

    return (
        <div>
            <span className='font-bold text-xl ml-10'>{categorie}</span>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                speed={1000}
                slidesPerView={5}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <Movies movies={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
