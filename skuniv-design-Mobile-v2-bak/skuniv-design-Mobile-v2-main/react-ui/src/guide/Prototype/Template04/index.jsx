import React from 'react';
import { AppbarBasic } from '../../../components';
import { Section01, Section02 } from './components';
import { Button } from 'semantic-ui-react';
import './style.scss';

const Template04 = () => {
    return (
        <div className='sub_wrapper cube_wrapper'>
            <AppbarBasic>
                <Button type='button'><span className='_blind'>학습현황</span></Button>
				<Button type='button'><span className='_blind'>찜하기</span></Button>
				<Button type='button' icon className='study'><span className='blind'>학습목록</span></Button>
            </AppbarBasic>
            <main role="main" className='container'>
                <div className='content_head'>
                    <h2>Content Heading 2</h2>
                    <p className='summary'>Content Heading Summary</p>
                </div>
                <div className='content_body'>
                    <Section01 />
                    <Section02 />
                </div>
            </main>
            <Button type='button' icon className='top' onClick={()=>{window.scrollTo(0,0)}}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default Template04