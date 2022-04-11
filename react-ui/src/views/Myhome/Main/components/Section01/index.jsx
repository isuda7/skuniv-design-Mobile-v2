import React from 'react';
import { MainEventSwiper } from '..';
import './style.scss';

const Section01 = () => {
    return (
        <section className='sec main_event_sec'>
            <h2 className='blind'>Heading2</h2>
            <MainEventSwiper swipeName='main_event_swiper' />
        </section>
    )
}

export default Section01