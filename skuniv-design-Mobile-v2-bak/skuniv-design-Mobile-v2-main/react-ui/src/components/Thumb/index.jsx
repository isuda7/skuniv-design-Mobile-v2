import React from 'react';
// import { Image } from 'semantic-ui-react';
import './style.scss';

const Thumb = (props) => {
	return (
		<span className={'thumb' + (props.className ? ' ' + props.className : '') + (props.type ? ' ' + props.type : '')}
			style={(typeof props.src === 'string' && props.src !== '') ? {'background-image':'url('+ props.src +')'} : {}}
		>
			<span className='blind' aria-hidden='true'>{props.alt}</span>
			{props.children}
		</span>
	)
}
export default Thumb