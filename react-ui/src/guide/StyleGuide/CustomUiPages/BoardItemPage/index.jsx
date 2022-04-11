import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import {
    BoardItemBadge,
    BoardItemCommunity1,
    BoardItemCommunity2,
    BoardItemCommunity3,
    BoardItemLearning,
    BoardItemPlaylist,
    BoardItemTeacher,
} from '../../../../components'

import Badge_01 from "../../../../assets/images/demo/thumb-badge01.png";
import Community_01 from "../../../../assets/images/demo/thumb-community01.png";
import Teacher_01 from "../../../../assets/images/demo/thumb-community01.png";
import Playlist_01 from "../../../../assets/images/demo/thumb-community01.png";
import Thumb_01 from '../../../../assets/images/demo/thumb-01.png';

const BoardItemPage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Board Item</h2>
            <h3 className='g_h3'>Learning</h3>
            <p>좌측 공통: item_check (prop.property)</p>
            <p>우측 구성: item_util (prop.children)</p>
            <p>하단 구성: item_foot (prop.children)</p>
            <h4 className='g_h4'>Learning Default</h4>
            <div className='preview'>
                <div className="out_sec">
                    <BoardItemLearning
                        // Default
                        className='type1'
                        thumb={Thumb_01}
                        category='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                    />
                    <BoardItemLearning
                        // Default
                        className='type1'
                        thumb={Thumb_01}
                        category='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                        // Case Chackbox
                        checked
                        chkName='learningCheck2'
                        chkId='learningCheck21'
                    />

                </div>
            </div>

            <h4 className='g_h4'>Learning Type1</h4>
            <div className='preview'>
                <div className="out_sec">
                    <BoardItemLearning
                        // Default
                        className='type1'
                        thumb={Thumb_01}
                        category='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                    >
                        <div className='item_foot'>
                            <Label className='rate_count normal'><Icon className='rate' /><span className='count'>4.8</span></Label>
                            <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                        </div>
                    </BoardItemLearning>
                    <BoardItemLearning
                        // Default
                        className='type1'
                        thumb={Thumb_01}
                        category='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                        // Case Chackbox
                        checked
                        chkName='learningCheck2'
                        chkId='learningCheck21'
                    >
                        <div className='item_foot'>
                            <Label className='rate_count normal'><Icon className='rate' /><span className='count'>4.8</span></Label>
                            <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                        </div>
                    </BoardItemLearning>
                </div>
            </div>

            <h4 className='g_h4'>Learning Type2</h4>
            <div className='preview'>
                <div className="out_sec">
                    <BoardItemLearning
                        // Default
                        className='type2'
                        thumb={Thumb_01}
                        cateogry='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                    >
                        <div className='item_util'>
                            <Button type='button' icon className='del'><span className='blind'>학습카드 삭제</span></Button>
                            <Button type='button' icon className='drop'><span className='blind'>학습카드 순서변경</span></Button>
                        </div>
                    </BoardItemLearning>
                </div>
            </div>

            <h4 className='g_h4'>Learning Type3</h4>
            <div className='preview'>
                <div className="out_sec">
                    <BoardItemLearning
                        // Default
                        className='type3'
                        thumb={Thumb_01}
                        category='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                    >
                        <div className='item_util'>
                            <Label className='rate_count normal'><Icon className='rate' /><span className='count'>4.8</span></Label>
                            <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                        </div>
                    </BoardItemLearning>
                </div>
            </div>

            <h4 className='g_h4'>Learning Type4</h4>
            <div className='preview'>
                <div className="out_sec">
                    <BoardItemLearning
                        // Default
                        className='type4'
                        thumb={Thumb_01}
                        category='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                        // Case Chackbox
                        checked
                        chkName='learningCheck'
                        chkId='learningCheck1'

                    >
                        <div className='item_foot'>
                            <div className='left_area'>
                                <Label className='date'><Icon className='date' />2022.04.30</Label>
                            </div>
                            <div className='right_area'>
                                <em className='total_count'>
                                    <span className='count'>1</span>
                                    <span className='split'>/</span>
                                    <span className='total'>10</span>
                                </em>
                                <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                            </div>
                        </div>
                    </BoardItemLearning>
                </div>
            </div>

            <h4 className='g_h4'>Learning Type5</h4>
            <div className='preview'>
                <div className="out_sec">
                    <BoardItemLearning
                        // Default
                        className='type5'
                        thumb={Thumb_01}
                        category='카테고리명'
                        title='[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례 두 줄 까지 들어가요.'
                    >
                        <div className='item_foot'>
                            <div className="left_area">
                                <em className='d_day'>D-3</em>
                                <Label className='date'>2022.04.30</Label>
                            </div>
                            <div className='right_area'>
                                <Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
                            </div>
                        </div>
                    </BoardItemLearning>
                </div>
            </div>

            <h3 className='g_h3'>Badge</h3>
            <div className='preview'>
                <BoardItemBadge
                    thumb={Badge_01}
                    category='카테고리명'
                    title='코스명이 들어갑니다 코스명이 들어가요 코스명이요 들어가요 두줄까지 노출 가능합니다.'
                />
            </div>

            <h3 className='g_h3'>Community</h3>
            <h4 className='g_h4'>가입한 커뮤니티</h4>
            <div className='preview'>
                <BoardItemCommunity1
                    thumb={Community_01}
                    title='[ Management College ] _ 직무 Essential 과정의 Community'
                />
            </div>
            <h4 className='g_h4'>미가입한 커뮤니티</h4>
            <div className='preview'>
                <BoardItemCommunity2
                    thumb={Community_01}
                    category='카테고리명'
                    title='[ Management College ] _ 직무 Essential 과정의 Community'
                    desc='SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간 SV/ESG를 깊이 이해하고 업무에 적용하기 위해 함께 학습하는 공간'
                    name='일이삼사오육칠팔구십일이삼사오육칠팔구십'
                    member='000'
                />
            </div>
            <h4 className='g_h4'>요약정보 커뮤니티</h4>
            <div className='preview'>
                <BoardItemCommunity3
                    thumb={Community_01}
                    title='[ Management College ] _ 직무 Essential 과정의 Community'
                    name='일이삼사오육칠팔구십일이삼사오육칠팔구십'
                    member='000'
                />
            </div>

            <h3 className='g_h3'>강사</h3>
            <div className='preview'>
                <BoardItemTeacher
                    thumb={Teacher_01}
                    title='[ Management College ] _ 직무 Essential 과정의 Community'
                    category='강사직책'
                    desc1='임페리얼칼리지런던컴퓨터공학부의인지능력테스트학과'
                    desc2='임페리얼칼리지런던컴퓨터공학부의인지능력테스트학과'
                />
            </div>

            <h3 className='g_h3'>플레이리스트</h3>
            <div className='preview'>
                <BoardItemPlaylist
                    thumb={Playlist_01}
                    userName='사용자이름'
                    partName='소속부서'
                    compName='회사부서'
                    email='abcd***@sk.com'
                />
                <BoardItemPlaylist
                    thumb={Playlist_01}
                    userName='사용자이름'
                    partName='소속부서'
                    compName='회사부서'
                    email='abcd***@sk.com'
                    checked
                    chkName='playlist1'
                    chkId='playlist11'
                />
            </div>
        </section>
    )
}

export default BoardItemPage
