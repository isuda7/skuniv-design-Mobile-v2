import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const SwiperMinute = ({swipeName}) => {
	const swiperParam = {
		threshold: 1,
		speed:300,
		loop: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		direction: "vertical",
	}

	const totalItems = 5;
	const items = new Array(totalItems).fill(null);

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				{items.map((_, idx) => <div key = {idx}>{idx + 1}0분</div>)}
			</Swiper>
		</div>
	)
}

export default SwiperMinute