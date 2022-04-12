import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import { AppbarBasic, Board, Thumb } from '../../../components';
import { CubeAccordion, CubeInfoList, CubeItem, CubeOverview, CubeReferences, LearningHead, LearningHeadLinkBadge, LearningHeadLinkTeacher } from '../components';
import { Link } from 'react-router-dom';
import Teacher_01 from "../../../assets/images/demo/thumb-community01.png";
import Badge_01 from '../../../assets/images/demo/thumb-badge01.png';

import './style.scss';

const LearningComponents = () => {
    return (
        <div className='sub_wrapper has_floating gap_none'>
            <AppbarBasic className='theme_dark'>
                <Button type='button' icon className='learnActive is_active'><span className='blind'>학습과정</span></Button>
                <Button type='button' icon className='wish'><span className='blind'>찜하기</span></Button>
                <Button type='button' icon className='more'><span className='blind'>찜하기</span></Button>
            </AppbarBasic>
            <main role="main" className='container learning_container'>
                <div className='content_head theme_dark'>
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
                    <LearningHeadLinkTeacher>
                        <Link to='' className='teacher_inner'>
                            <div className='teacher_thumb'>
                                <Thumb src={Teacher_01} alt='' />
                            </div>
                            <div className='teacher_body'>
                                <div className='title'><strong>조승빈</strong></div>
                                <div className='sub_txt'>컨크루언트 애자일</div>
                            </div>
                        </Link>
                    </LearningHeadLinkTeacher>
                    <LearningHeadLinkTeacher>
                        <Link to='' className='teacher_inner'>
                            <div className='teacher_thumb'>
                                <Thumb src={Teacher_01} alt='' />
                            </div>
                            <div className='teacher_body'>
                                <div className='title'><strong>조승빈</strong><Label as={'em'}>대표</Label></div>
                                <div className='sub_txt'>컨크루언트 애자일</div>
                            </div>
                        </Link>
                    </LearningHeadLinkTeacher>
                </div>
                <div className='content_body'>
                    <Board className='cube_list_sec'>
                        <div className='board_list'>
                            <CubeItem className='video is_state1'>
                                <Link to='' className='item_inner'>
                                    <div className='item_thumb'>
                                        <Label className='played per0'><span className='blind'>Cube</span></Label>
                                    </div>
                                    <div className='item_body'>
                                        <p className='title'><strong>Cube : 왜 혁신 리더의 Diary인가?</strong></p>
                                        <div className='sub_txt'>Video<i className='split'></i>3m</div>
                                    </div>
                                </Link>
                            </CubeItem>
                            <CubeItem className='survay is_state2 is_disabled'>
                                <Link to='' className='item_inner'>
                                    <div className='item_thumb'>
                                        <Label className='played per50'><span className='blind'>Survay</span></Label>
                                    </div>
                                    <div className='item_body'>
                                        <p className='title'><strong>큐브유형(Test/Report/Survay)</strong></p>
                                    </div>
                                </Link>
                            </CubeItem>
                            <CubeItem className='survay is_state3 is_repley'>
                                <Link to='' className='item_inner'>
                                    <div className='item_thumb'>
                                        <Label className='played per100'><span className='blind'>Survay</span></Label>
                                    </div>
                                    <div className='item_body'>
                                        <p className='title'><strong>Survay : 왜 혁신 리더의 Diary인가?</strong></p>
                                        <div className='sub_txt'>Survay<i className='split'></i>참여완료</div>
                                    </div>
                                </Link>
                            </CubeItem>
                        </div>
                    </Board>

                    <CubeAccordion />

                    <Board className='cube_list_sec gap_sec'>
                        <div className='sec_head'>
                            <h2 className='heading2'>마무리</h2>
                        </div>
                        <div className='sec_body'>
                            <CubeItem className='survay is_state3 '>
                                <Link to='' className='item_inner'>
                                    <div className='item_thumb'>
                                        <Label className='played per100'><span className='blind'>Survay</span></Label>
                                    </div>
                                    <div className='item_body'>
                                        <p className='title'><strong>Survay</strong></p>
                                        <div className='sub_txt'>학습 진행 후 Survey 참여 가능</div>
                                    </div>
                                </Link>
                            </CubeItem>
                        </div>
                    </Board>

                    <CubeOverview
                        count='11,247'
                        part='Intermediate'
                        contact='조현희(SK이노베이션)'
                    />
                    <br />
                    <CubeOverview
                        count='11,247'
                        part='Intermediate'
                        contact='이름 두 줄 이상일 경우, 문의하기 버튼이 밑줄에 맞춰집니다.'
                    />
                    <br/>
                    <CubeReferences>
                        <div className="references_body">
                            {/* CSS로 여러줄의 중간 말줄임은 불가합니다. */}
                            <p className="title">[보충학습자료] 꿀잼반도체 1. 인류 최고의 발명품 트랜지스인류 최명품 트랜지명품 트랜지스....pdf</p>
                            <p className="bytes">249KB</p>
                        </div>
                        <div className="references_util">
                            <Button type='button' icon className="file_down"><span className='blind'>다운로드</span></Button>
                        </div>
                    </CubeReferences>
                    <br/>
                    <CubeReferences>
                        <div className="references_body">
                            {/* CSS로 여러줄의 중간 말줄임은 불가합니다. */}
                            <p className="title">[보충학습자료] 꿀잼반도체 1. 트랜지...pdf</p>
                            <p className="bytes">249KB</p>
                        </div>
                        <div className="references_util">
                            <Button type='button' icon className="file_link"><span className='blind'>새창열기</span></Button>
                            <Button type='button' icon className="file_down"><span className='blind'>다운로드</span></Button>
                        </div>
                    </CubeReferences>
                    <br />
                    <CubeInfoList>
                        <Label>차시</Label>
                        <p className='item'>정보1</p>
                        <p className='item'>정보2</p>
                    </CubeInfoList>
                    <br />
                    <CubeInfoList>
                        <Label>차시</Label>
                        <p className='item'>
                            <strong className='title'>수강신청기간</strong>
                            <span className='date'>2021.12.02 ~ 2022.03.04</span>
                        </p>
                        <p className='item'>
                            <strong className='title'>수강신청기간</strong>
                            <span className='date'>2021.12.02 ~ 2022.03.04</span>
                        </p>
                    </CubeInfoList>
                </div>
                <div className='content_foot'>
                    <div className='page_action'>
                        <Button type='button' className='base primary'>학습 이어하기</Button>
                    </div>
                </div>
             </main>
            <Button type='button' icon className='top' onClick={() => { window.scrollTo(0, 0) }}><span className='blind'>Scroll to top</span></Button>
        </div>
    )
}
export default LearningComponents