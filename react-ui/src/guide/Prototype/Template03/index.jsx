import React from 'react';
import { Popup, Button } from 'semantic-ui-react';
import { AppbarBasic } from '../../../components';
import { Section01, Section02 } from './components';
import './style.scss';

const Template03 = () => {
    return (
        <div className='sub_wrapper'>
            <AppbarBasic>
                <Button type='button' icon className='study'><span className='blind'>학습목록</span></Button>
                <Popup on='click' trigger={<Button type='button' icon className='more'><span className='blind'>더보기</span></Button>}>
                    <Popup.Content>
                        <p>Popup Content</p>
                    </Popup.Content>
                </Popup>
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
                <div className='content_foot'>
                    <div className='page_action'>
                        <Button type='button' className='base primary'>버튼</Button>
                    </div>
                </div>
            </main>
            <Button type='button' icon className='top' onClick={()=>{window.scrollTo(0,0)}}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default Template03