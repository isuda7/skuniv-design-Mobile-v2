import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Image } from 'semantic-ui-react';

const AppbarProfile = (props) => {
	return (
        <header className='header header_profile'>
            <div className='header_left'>
                <Link to='' className='avata_area'>
                    <span className='avata'><Image src={props.avata} alt={props.title + ' Profile Avata'} /></span>
                    <h1><strong>{props.title}</strong><span className='blind'> 마이 홈</span></h1>
                </Link>
            </div>
            <div className='header_right'>
                <Popup on='click' trigger={<Button type='button' icon className='alim'><span className='blind'>알림</span></Button>}>
                    <Popup.Content>
                        <p>Popup Content</p>
                    </Popup.Content>
                </Popup>
                <Button type='button' icon className='search'><span className='blind'>검색</span></Button>
            </div>
        </header>
	)
}
export default AppbarProfile