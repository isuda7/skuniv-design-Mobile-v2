import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.scss';

const AppbarBasic = (props) => {
	return (
        <header className='header header_basic'>
			<div className='header_left'>
				<Button type='button' icon className='history'><span className='blind'>뒤로</span></Button>
				{(typeof props.title === 'string') && <h1><strong>{props.title}</strong></h1>}
			</div>
			<div className='header_right'>
				{props.children}
			</div>
        </header>
	)
}
export default AppbarBasic