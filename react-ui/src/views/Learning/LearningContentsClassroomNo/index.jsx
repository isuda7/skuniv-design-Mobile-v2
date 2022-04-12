import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Sticky } from 'semantic-ui-react';
import { AppbarBasic, Nav } from '../../../components';
import { LearningHead } from '../conponents';
import { Section01 } from './components';
import './style.scss';

const LearningContentsClassroomNo = () => {
    // Tab Variables
    const [tabParam1, setTabParam1] = useState(0);

    // Sticky Variables
    const StickyRef = useRef();

    return (
        <div className='sub_wrapper has_floating gap_none'>
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
                    <>
                        <div className='content_body'>
                            <Section01 />
                        </div>
                        <div className='content_foot'>
                            <div className='page_action'>
                                <Button type='button' className='base primary'>학습 이어하기</Button>
                            </div>
                        </div>
                    </>
                }
                {tabParam1 === 1 &&
                    <>
                        <div className='content_body'>
                            <Link to='/Learning/LearningOverview'>Overview</Link>
                        </div>
                    </>
                }
                {tabParam1 === 2 &&
                    <div>
                        {/* <Link to='/Learning/LearningOverview'>Overview</Link> */}
                    </div>
                }
                {tabParam1 === 3 &&
                    <div>
                        {/* <Link to='/Learning/LearningOverview'>Overview</Link> */}
                    </div>
                }
            </main>
            <Button type='button' icon className='top' onClick={() => { window.scrollTo(0, 0) }}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default LearningContentsClassroomNo