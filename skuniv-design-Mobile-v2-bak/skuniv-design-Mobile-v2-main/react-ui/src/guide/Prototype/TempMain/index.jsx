import React from 'react';
import { AppbarProfile, AppNav } from '../../../components';
import { Section01, Section02 } from './components';
import avatar80_01 from "../../../assets/images/demo/avata-profile-80-01.png";
import { Button } from 'semantic-ui-react';
import './style.scss';

const TempMain = () => {
    return (
        <div className='main_wrapper'>
            <AppbarProfile avata={avatar80_01} title='신사임당' />
            <main role='main' className='container'>
                <div className='content_body'>
                    <Section01 />
                    <Section02 />
                </div>
            </main>
            <AppNav />
            <Button type='button' icon className='top' onClick={()=>{window.scrollTo(0,0)}}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default TempMain
