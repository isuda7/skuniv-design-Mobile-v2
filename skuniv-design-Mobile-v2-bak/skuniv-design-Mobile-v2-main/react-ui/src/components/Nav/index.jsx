import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.scss';

const Nav = (props) => {
	return (
		<nav className={'nav' + (props.className ? ' '+props.className : '') + (props.scroll?' scroll':'')}>
			<div className='nav_list'>
				{props.children}
			</div>
			{props.scroll &&
				<div className='nav_next'>
					<Button type='button' icon className='next'><span className='blind'>다음</span></Button>
				</div>
			}
		</nav>
	)
}
export default Nav
