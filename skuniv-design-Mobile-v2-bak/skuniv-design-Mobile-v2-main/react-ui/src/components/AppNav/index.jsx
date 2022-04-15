import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';

const AppNav = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
	}

	return (
		<>
			<footer className='footer'>
				<nav className='navigation'>
					<Button icon className='nav_item drower' onClick={handleOpen}>
						<Icon name='bars' />
					</Button>
					<Button icon className='nav_item'>추천</Button>
					<Button icon className='nav_item'>마이서니</Button>
					<Button icon className='nav_item'>커뮤니티</Button>
					<Button icon className='nav_item'>더보기</Button>
				</nav>
			</footer>

			<aside className={'aside ' + (open ? 'is_active':'')} aria-hidden={open?'false':'true'}>
				<div className='aside_head'>
					<h1 className='aside_logo'>SUNI</h1>
					<Link to='' className='logout'>Logout</Link>
				</div>
				<div className='aside_body'>
					<nav className='gnb'>
						<ul className='gnb-dep1'>
							<li className='gnb-dep1-item'>
								<NavLink to='/main/mainIndex2' className='gnb-dep1-link'>Reviews</NavLink>
							</li>
							<li className='gnb-dep1-item'>
								<NavLink to='/main/mainIndex' className='gnb-dep1-link'>Editorials</NavLink>
							</li>
							<li className='gnb-dep1-item'>
								<NavLink to='/main/mainIndex3' className='gnb-dep1-link'>Upcoming Events</NavLink>
							</li>
						</ul>
					</nav>
				</div>

				<Button icon className='close' onClick={handleClose}>
					<Icon name="close" />
					<span className='blind'>닫기</span>
				</Button>
			</aside>
		</>
	)
}
export default AppNav