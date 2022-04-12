import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import { Board, BoardItem } from '../../../../../components';
import './style.scss';

const Section01 = () => {
    return (
        <Board className='vod_list_sec'>
            <div className='board_head'>
                <div className='board_count'>
                    <span className='total'>총</span>
                    <em className='count'>3</em>
                    <span className='unit'>개 강의 구성</span>
                </div>
            </div>

            <div className='board_list'>
                {/* [BoardItem Cases]
                    공통: cube

                    진행전: is_state1
                    진행중: is_state2
                    진행완료: is_state3

                    큐브기본: basic
                    테스트: test
                    레포트: report
                    설문지: survay

                    화살표 없는 경우: is_disabled
                    리플인 경우: is_repley
                */}
                <BoardItem className='cube video is_state1'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per0'><span className='blind'>Cube</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Cube : 왜 혁신 리더의 Diary인가?</strong></p>
                            <div className='sub_txt'>Video<i className='split'></i>3m</div>
                        </div>
                    </Link>
                </BoardItem>

                <BoardItem className='cube video is_state2'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per50'><span className='blind'>Cube</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Cube : 왜 혁신 리더의 Diary인가?</strong></p>
                            <div className='sub_txt'>Video<i className='split'></i>3m</div>
                        </div>
                    </Link>
                </BoardItem>

                <BoardItem className='cube video is_state3'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per100'><span className='blind'>Cube</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Cube : 왜 혁신 리더의 Diary인가?</strong></p>
                            <div className='sub_txt'>Video<i className='split'></i>3m</div>
                        </div>
                    </Link>
                </BoardItem>
                <BoardItem className='cube test is_state1 is_disabled'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per0'><span className='blind'>Test</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Test</strong></p>
                        </div>
                    </Link>
                </BoardItem>
                <BoardItem className='cube test is_state1'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per0'><span className='blind'>Test</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Test</strong></p>
                        </div>
                    </Link>
                </BoardItem>
                <BoardItem className='cube report is_state2'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per50'><span className='blind'>Report</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Report : 왜 혁신 리더의 Diary인가?</strong></p>
                            <div className='sub_txt'>Report</div>
                        </div>
                    </Link>
                </BoardItem>
                <BoardItem className='cube survay is_state1 is_disabled'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per0'><span className='blind'>Survay</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Survay : 왜 혁신 리더의 Diary인가?</strong></p>
                            <div className='sub_txt'>학습 진행 후 Survey 참여 가능</div>
                        </div>
                    </Link>
                </BoardItem>
                <BoardItem className='cube survay is_state3'>
                    <Link to='' className='item_inner'>
                        <div className='item_thumb'>
                            <Label className='played per100'><span className='blind'>Survay</span></Label>
                        </div>
                        <div className='item_body'>
                            <p className='title'><strong>Survay : 왜 혁신 리더의 Diary인가?</strong></p>
                            <div className='sub_txt'>Survay<i className='split'></i>참여완료</div>
                        </div>
                    </Link>
                </BoardItem>
            </div>
        </Board>
    )
}

export default Section01