import React, { useState, useRef } from 'react';
import { Popup, Button, Label, Icon, Sticky } from 'semantic-ui-react';
import { AppbarBasic, AppNav, Board, BoardItemBadge, BoardItemCommunity2, BoardItemLearning, FullArea, Nav, NoData } from '../../../components';
// import { Section01, Section02 } from './components';
import Thumb_01 from '../../../assets/images/demo/thumb-01.png';
import Badge_01 from "../../../assets/images/demo/thumb-badge01.png";
import Community_01 from "../../../assets/images/demo/thumb-community01.png";
import './style.scss';

const Template02 = () => {
    // Tab Variables
    const [tabParam1, setTabParam1] = useState(0);

    // Sticky Variables
    const StickyRef = useRef();

    return (
        <div className='sub_wrapper has_appnav'>
            <AppbarBasic>
                <Popup on='click' trigger={<Button type='button' icon className='more'><span className='blind'>더보기</span></Button>}>
                    <Popup.Content>
                        <p>Popup Content</p>
                    </Popup.Content>
                </Popup>
            </AppbarBasic>
            <main role="main" className='container'>
                <div className='content_head'>
                    <Sticky ref={StickyRef} offset={52}>
                        <Nav className='style2'>
                            <button type='button' className={'nav_item' + (tabParam1 === 0 ? ' is_active' : '')} onClick={() => setTabParam1(0)}>목록1</button>
                            <button type='button' className={'nav_item' + (tabParam1 === 1 ? ' is_active' : '')} onClick={() => setTabParam1(1)}>목록2</button>
                            <button type='button' className={'nav_item' + (tabParam1 === 2 ? ' is_active' : '')} onClick={() => setTabParam1(2)}>결과없음1</button>
                            <button type='button' className={'nav_item' + (tabParam1 === 3 ? ' is_active' : '')} onClick={() => setTabParam1(3)}>결과없음2</button>
                        </Nav>
                    </Sticky>
                </div>
                {tabParam1 === 0 &&
                    <div className='content_body'>
                        <Board>
                            <div className='board_head'>
                                <div className='board_count'>
                                    <span className='total'>총</span>
                                    <em className='count'>11</em>
                                    <span className='unit'>개</span>
                                </div>
                                <div className='board_util'>
                                    <Button type='button' icon className='filter'><span className='blind'>Filter View</span></Button>
                                </div>
                            </div>
                            <div className='board_body'>
                                <div className='learning_list'>
                                    <BoardItemLearning className='type1' thumb={Thumb_01} category='카테고리명'
                                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                                    >
                                        <div className='item_foot'>
                                            <Label className='rate_count normal'><Icon className='rate' /><span className='count'>4.8</span></Label>
                                            <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                                        </div>
                                    </BoardItemLearning>
                                    <BoardItemLearning className='type1' thumb={Thumb_01} category='카테고리명'
                                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                                    >
                                        <div className='item_foot'>
                                            <Label className='rate_count normal'><Icon className='rate' /><span className='count'>4.8</span></Label>
                                            <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                                        </div>
                                    </BoardItemLearning>
                                    <BoardItemLearning className='type1' thumb={Thumb_01} category='카테고리명'
                                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                                    >
                                        <div className='item_foot'>
                                            <Label className='rate_count normal'><Icon className='rate' /><span className='count'>4.8</span></Label>
                                            <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                                        </div>
                                    </BoardItemLearning>
                                    <BoardItemLearning className='type1' thumb={Thumb_01} category='카테고리명'
                                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                                    >
                                        <div className='item_foot'>
                                            <Label className='rate_count normal'><Icon className='rate' /><span className='count'>4.8</span></Label>
                                            <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                                        </div>
                                    </BoardItemLearning>
                                    <div className='list_action out_sec'>
                                        <Button type='button' className='text arrow_link'>전체보기</Button>
                                    </div>
                                </div>
                            </div>
                        </Board>
                    </div>
                }
                {tabParam1 === 1 &&
                    <div className='content_body'>
                        <Board>
                            <div className='board_head'>
                                <div className='board_count'>
                                    <span className='total'>총</span>
                                    <em className='count'>11</em>
                                    <span className='unit'>개</span>
                                </div>
                                <div className='board_util'>
                                    <Button type='button' icon className='filter'><span className='blind'>Filter View</span></Button>
                                </div>
                            </div>
                            <div className='board_body'>
                                <div className='badge_list'>
                                    <BoardItemBadge
                                        thumb={Badge_01}
                                        category='카테고리명'
                                        title='코스명이 들어갑니다 코스명이 들어가요 코스명이요 들어가요 두줄까지 노출 가능합니다.'
                                    />
                                    <BoardItemBadge
                                        thumb={Badge_01}
                                        category='카테고리명'
                                        title='코스명이 들어갑니다 코스명이 들어가요 코스명이요 들어가요 두줄까지 노출 가능합니다.'
                                    />
                                    <BoardItemBadge
                                        thumb={Badge_01}
                                        category='카테고리명'
                                        title='코스명이 들어갑니다 코스명이 들어가요 코스명이요 들어가요 두줄까지 노출 가능합니다.'
                                    />
                                    <div className='list_action out_sec'>
                                        <Button type='button' className='text arrow_expend'>더보기</Button>
                                    </div>
                                </div>

                                <div className='divider section'></div>

                                <div className='comunity_list'>
                                    <BoardItemCommunity2
                                        thumb={Community_01}
                                        category='카테고리명'
                                        title='[ Management College ] _ 직무 Essential 과정의 Community'
                                        desc='SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간 SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간'
                                        name='일이삼사오육칠팔구십일이삼사오육칠팔구십'
                                        member='000'
                                    />
                                    <BoardItemCommunity2
                                        thumb={Community_01}
                                        category='카테고리명'
                                        title='[ Management College ] _ 직무 Essential 과정의 Community'
                                        desc='SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간 SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간'
                                        name='일이삼사오육칠팔구십일이삼사오육칠팔구십'
                                        member='000'
                                    />
                                    <BoardItemCommunity2
                                        thumb={Community_01}
                                        category='카테고리명'
                                        title='[ Management College ] _ 직무 Essential 과정의 Community'
                                        desc='SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간 SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간'
                                        name='일이삼사오육칠팔구십일이삼사오육칠팔구십'
                                        member='000'
                                    />
                                </div>
                                <div className='list_action out_sec'>
                                    <Button type='button' className='text arrow_expend'>더보기</Button>
                                </div>
                            </div>
                        </Board>
                    </div>
                }
                {tabParam1 === 2 &&
                    // Board in Nodata
                    <div className='content_body'>
                        <Board>
                            <div className='board_head'>
                                <div className='board_count'>
                                    <span className='total'>총</span>
                                    <em className='count'>11</em>
                                    <span className='unit'>개</span>
                                </div>
                                <div className='board_util'>
                                    <Button type='button' icon className='filter'><span className='blind'>Filter View</span></Button>
                                </div>
                            </div>
                            <div className='board_body'>
                                <FullArea>
                                    <NoData>
                                        <p className='msg'>검색된 결과가 없습니다.</p>
                                    </NoData>
                                </FullArea>
                            </div>
                        </Board>
                    </div>
                }
                {tabParam1 === 3 &&
                    // Nodata Only
                    <div className='content_body'>
                        <FullArea>
                            <NoData>
                                <p className='msg'>검색된 결과가 없습니다.</p>
                            </NoData>
                        </FullArea>
                    </div>
                }
            </main>
            <AppNav />
            <Button type='button' icon className='top' onClick={()=>{window.scrollTo(0,0)}}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default Template02