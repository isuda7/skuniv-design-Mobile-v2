import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const SwiperHour = ({swipeName}) => {
	const swiperParam = {
		threshold: 1,
		speed:300,
		loop: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		direction: "vertical",
	}

	const totalItems = 12;
	const items = new Array(totalItems).fill(null);

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				{items.map((_, idx) => <div key = {idx}>
					{idx < 10 ? '0':''}{idx + 1}시
				</div>)}
			</Swiper>
		</div>
	)
}

export default SwiperHour