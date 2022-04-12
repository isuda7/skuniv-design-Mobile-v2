import React, { Fragment, useRef, useState } from 'react';
import { Button, Sticky } from 'semantic-ui-react';
import { AppbarBasic, Nav, Thumb } from '../../../components';
import { LearningHead, LearningHeadLinkBadge } from '../conponents';
import { Section01 } from './components';
import { Link } from 'react-router-dom';
import Badge_01 from '../../../assets/images/demo/thumb-badge01.png';

import './style.scss';

const LearningComponents = () => {
    // Tab Variables
    const [tabParam1, setTabParam1] = useState(1);

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
                    <LearningHeadLinkBadge>
                        <Link to='' className='badge_inner'>
                            <div className='badge_thumb'>
                                <Thumb src={Badge_01} alt='' />
                            </div>
                            <div className='badge_body'>
                                <div className='sub_txt'>획득 가능 뱃지</div>
                                <div className='title'>
                                    <strong>Scenario Planning : Essential Scenario Planning : Essential Scenario Planning : Essential</strong>
                                </div>
                            </div>
                        </Link>
                    </LearningHeadLinkBadge>
                    <LearningHeadLinkBadge>
                        <Link to='' className='badge_inner'>
                            <div className='badge_thumb'>
                                <Thumb src={Badge_01} alt='' />
                                <Thumb src={Badge_01} alt='' />
                            </div>
                            <div className='badge_body'>
                                <div className='sub_txt'>획득 가능 뱃지</div>
                                <div className='title'>
                                    <strong>Scenario Planning : Essential Scenario Planning : Essential Scenario Planning : Essential</strong>
                                    <span className='other'>외 1개</span>
                                </div>
                            </div>
                        </Link>
                    </LearningHeadLinkBadge>


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
export default LearningComponents