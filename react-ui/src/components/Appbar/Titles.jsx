import React from 'react';
import { Button } from 'semantic-ui-react';

const AppbarTitles = (props) => {
	return (
        <header className='header header_titles'>
			<div className='header_left'>
				<Button type='button' icon className='history'><span className='blind'>뒤로</span></Button>
				<h1>
					<strong>{props.title}</strong>
					<span>{props.subTitle}</span>
				</h1>
			</div>
			<div className='header_right'>
				{props.children}
			</div>
        </header>
	)
}
export default AppbarTitles