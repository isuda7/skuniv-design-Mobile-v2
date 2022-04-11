import React from 'react';
import { Button } from 'semantic-ui-react';
import { AppbarProfile, AppNav } from '../../../components';
import { Section01, Section02 } from './components';
import './style.css';

const TempSubmain = () => {
    return (
        <div className='sub_wrapper'>
            <AppbarProfile title='추천' />
            <main role="main" className='container'>
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
export default TempSubmain