import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const SwiperHalf = ({swipeName}) => {
	const swiperParam = {
		threshold: 1,
		speed:300,
		slidesPerView: 'auto',
		centeredSlides: true,
		direction: "vertical",
		resistanceRatio: false,
	}

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				<div>오전</div>
				<div>오후</div>
			</Swiper>
		</div>
	)
}

export default SwiperHalf