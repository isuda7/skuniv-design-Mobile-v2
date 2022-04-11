import React from 'react';
import Thumb_01 from '../../../../assets/images/demo/thumb-01.png';
import Thumb_02 from '../../../../assets/images/demo/thumb-02.png';
import { Thumb } from '../../../../components';
// import {} from "semantic-ui-react";

const ThumbPage = () => {
	return (
		<section className='g_sec'>
			<h2 className='g_h2'>Thumbnails</h2>
			<h3 className='g_h3'>Thumbs</h3>
			<h4 className='g_h4'>Default</h4>
			<div className='preview'>
				{/* Demo Size */}
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': 'gray' }}>
					{/* as='link', as='button' 태그네임 적용가능 */}
					<Thumb src={Thumb_01} alt='' />
				</div>
			</div>
			<h4 className='g_h4'>Ribons</h4>
			<div className='preview'>
				{/* Demo Size */}
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': 'gray' }}>
					{/* as='link', as='button' 태그네임 적용가능 */}
					<Thumb src={Thumb_01} alt=''>
						<span className='ribon'>리본</span>
					</Thumb>
				</div>
				<br />
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': 'gray' }}>
					{/* as='link', as='button' 태그네임 적용가능 */}
					<Thumb src={Thumb_01} alt=''>
						<div className='ribon_area'>
							<span className='ribon'>리본</span>
							<button type='button' className='ribon'>리본</button>
						</div>
					</Thumb>
				</div>
			</div>
			<h4 className='g_h4'>View Types</h4>
			<div className='preview'>
				<p className='g_para'>가로기준 채우기</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#eee' }}>
					<Thumb src={Thumb_01} alt='' />
				</div>
				<br />
				<p className='g_para'>비율 다르면 작아지도록</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#ddd' }}>
					<Thumb type='min' src={Thumb_01} alt='' />
				</div>
				<br />
				<p className='g_para'>비율 다르면 채워지도록</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#ccc' }}>
					<Thumb type='max' src={Thumb_01} alt='' />
				</div>
				<br />
				<p className='g_para'>가로기준 채우기</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#eee' }}>
					<Thumb src={Thumb_02} alt='' />
				</div>
				<br />
				<p className='g_para'>비율 다르면 작아지도록</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#ddd' }}>
					<Thumb type='min' src={Thumb_02} alt='' />
				</div>
				<br />
				<p className='g_para'>비율 다르면 채워지도록</p>
				<div style={{ 'width': '20rem', 'height': '16rem', 'background': '#ccc' }}>
					<Thumb type='max' src={Thumb_02} alt='' />
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
