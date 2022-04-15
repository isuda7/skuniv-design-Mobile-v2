import React from 'react';
import { Thumb } from '../../../../components';
import Thumb_01 from '../../../../assets/images/demo/thumb-01.png';
import Thumb_02 from '../../../../assets/images/demo/thumb-02.png';
import { Button } from 'semantic-ui-react';
// import {} from "semantic-ui-react";

const ThumbPage = () => {
    const toggleWish = (e) => {
        if (e.target.className.indexOf('is_active') > 0) {
            e.target.classList.remove('is_active');
        } else {
            e.target.classList.add('is_active');
        }
    }
	return (
		<section className='g_sec'>
			<h2 className='g_h2'>Thumbnails</h2>
			<h3 className='g_h3'>Thumbs</h3>
			<h4 className='g_h4'>Default</h4>
			<div className='preview'>
				<p className='g_para'>비율 다르면 채워지도록 (가로 비율이 큼)</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#ccc' }}>
					<Thumb src={Thumb_01} alt='' />
				</div>
				<br />
				<p className='g_para'>비율 다르면 채워지도록 (세로 비율이 큼)</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#ccc' }}>
					<Thumb src={Thumb_02} alt='' />
				</div>
			</div>
			<h4 className='g_h4'>Ribons</h4>
			<div className='preview'>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': 'gray' }}>
					<Thumb src={Thumb_01} alt=''>
						<Button type='button' className='ribon' onClick={toggleWish}><span className='blind'>찜하기</span></Button>
					</Thumb>
				</div>
			</div>

			<h4 className='g_h4'>Sizes</h4>
			<div className='preview'>
				<p>사이즈는 상위구조 컨텐츠 스타일로 처리한다. (Default: w:100% * h:100%)</p>
			</div>
		</section>
	)
}

export default ThumbPage;
