import React, { Fragment, useRef, useState } from 'react';
import { Button, Sticky } from 'semantic-ui-react';
import { AppbarBasic, Nav } from '../../../components';
import { LearningHead } from '../conponents';
import { Section01 } from './components';
import './style.scss';

const LearningActivity = () => {
    // Tab Variables
    const [tabParam1, setTabParam1] = useState(1);

    // Sticky Variables
    const StickyRef = useRef();

    return (
        <div className='sub_wrapper'>
            <AppbarBasic className='theme_dark'>
                <Button type='button' icon className='learnActive is_active'><span className='blind'>학습과정</span></Button>
                <Button type='button' icon className='wish'><span className='blind'>찜하기</span></Button>
                <Button type='button' icon className='more'><span className='blind'>찜하기</span></Button>
            </AppbarBasic>
            <main role="main" className='container learning_container'>
                <div className='content_head'>
                    <LearningHead />
                    <Sticky ref={StickyRef} offset={52}>
                        <Nav className='style2'>
                            <button type='button' className={'nav_item' + (tabParam1 === 0 ? ' is_active' : '')} onClick={() => setTabParam1(0)}>콘텐츠</button>
                            <button type='button' className={'nav_item' + (tabParam1 === 1 ? ' is_active' : '')} onClick={() => setTabParam1(1)}>개요</button>
                            <button type='button' className={'nav_item' + (tabParam1 === 2 ? ' is_active' : '')} onClick={() => setTabParam1(2)}>관련과정</button>
                            <button type='button' className={'nav_item' + (tabParam1 === 3 ? ' is_active' : '')} onClick={() => setTabParam1(3)}>리뷰</button>
                        </Nav>
                    </Sticky>
                </div>
                {tabParam1 === 0 &&
                    <Fragment></Fragment>
                }
                {tabParam1 === 1 &&
                    <Fragment>
                        <div className='content_body'>
                            <Section01 />
                        </div>
                    </Fragment>
                }
                {tabParam1 === 2 &&
                    <Fragment></Fragment>
                }
                {tabParam1 === 3 &&
                    <Fragment></Fragment>
                }
            </main>
             <Button type='button' icon className='top' onClick={() => { window.scrollTo(0, 0) }}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default LearningActivity