import React, { Fragment } from 'react';
// import { Image } from 'semantic-ui-react';
import './style.scss';

const Thumb = (props) => {
	const viewType = () => {
		// Case Type 있음
		if (typeof props.type === 'string' && props.type !== '') {
			return props.type
		}
		// Case Type 없음
		else {
			// 기본타입 정의
			// '': 가로기준 채우기
			// 'min': 비율 다르면 작아지도록
			// 'max': 비율 다르면 채워지도록
			return ''
		}
	}
	const background = () => {
		// Case URL 있음
		if (typeof props.src === 'string' && props.src !== '') {
			return {'background-image':'url('+ props.src +')'};
		}
		// Case URL 없음
		else {
			return {};
		}
	}
	const image = () => {
		// Case URL 있음
		if (typeof props.src === 'string' && props.src !== '') {
			return props.src;
		}
		// Case URL 없음
		else {
			return '';
		}
	}
	return (
		<Fragment>
			{
				// max : css background cover처리 (공간 채우기에 최적화된 방법, 이미지 태그는 분기쳐야 함)
				viewType() === 'max' &&
				<span className={'thumb bg' +
					((typeof props.className === 'string' && props.className !== '') ? ' ' + props.className : '') +
					((typeof props.type === 'string' && props.type !== '') ? ' ' + props.type : '')}
					style={background()}
				>
					<span className='blind' aria-hidden='true'>{props.alt}</span>
					{props.children}
				</span>
			}
			{
				// '' | 'min' : image 처리 (이미지 자동비율 필요 : max-width, max-height 사용)
				viewType() !== 'max' &&
				<span className={'thumb img' +
					((typeof props.className === 'string' && props.className !== '') ? ' ' + props.className : '') +
					((typeof props.type === 'string' && props.type !== '') ? ' ' + props.type : '')}
				>
					<img src={image()} alt={props.alt} />
					{props.children}
				</span>
			}
		</Fragment>
	)
}
export default Thumb