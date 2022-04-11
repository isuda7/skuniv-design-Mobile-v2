import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

const Sample5 = ({swipeName}) => {
	const swiperParam = {
		threshold: 1,
		speed:300,
		loop: true,
		direction: "vertical",
		slidesPerView: 5
	}

	return (
		<div className={'swiper ' + swipeName}>
			<Swiper {...swiperParam}>
				<div>반응형 #1</div>
				<div>반응형 #2</div>
				<div>반응형 #3</div>
				<div>반응형 #4</div>
				<div>반응형 #5</div>
			</Swiper>
		</div>
	)
}

export default Sample5