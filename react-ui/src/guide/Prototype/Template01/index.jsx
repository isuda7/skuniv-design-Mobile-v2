import React from 'react';
import { Button } from 'semantic-ui-react';
import { AppbarBasic } from '../../../components';
import { Section01 } from './components';
import './style.scss';

const Template01 = () => {
    return (
        <div className='sub_wrapper has_floating'>
            <AppbarBasic title='Page Heading 1' />
            <main role="main" className='container'>
                <div className='content_head'>
                    <h2>Content Heading 2</h2>
                </div>
                <div className='content_body'>
                    <Section01 />
                </div>
                <div className='content_foot'>
                    <div className='page_action'>
                        <Button type='button' className='base'>버튼</Button>
                        <Button type='button' className='base primary'>버튼</Button>
                    </div>
                </div>
            </main>
            <Button type='button' icon className='top' onClick={()=>{window.scrollTo(0,0)}}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default Template01