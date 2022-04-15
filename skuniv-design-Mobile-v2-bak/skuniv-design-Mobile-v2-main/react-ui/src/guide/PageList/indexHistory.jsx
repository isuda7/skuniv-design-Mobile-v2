import React from 'react';
import {Table} from 'semantic-ui-react';
import Gnb from './gnb';
import './style.scss';

const PageList = () => {
    return (
        <div className='ia_wrap'>
            <iframe src='#/guide/GuideAll' frameBorder='0' height='760px' title='Prevoew' name='reactFrame'></iframe>
            <div className='ia_container'>
                <Gnb index="2" />
                <Table celled structured selectable>
                    <colgroup>
                        <col width='20%'/>
                        <col width='160px'/>
                        <col width='10%'/>
                        <col width='10%'/>
                        <col width='20%'/>
                        <col/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>제목</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>상세</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>상태</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>날짜</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>기타</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {/* HistoryList */}
                    <Table.Body>
                        <Table.Row verticalAlign='top' id='GuidePrototype'>
                            <Table.Cell colSpan='5' className='table-tit'>
                                <span className='text-bold'>History</span>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row verticalAlign='top' className='bg-purple'>
                            <Table.Cell>퍼블리깅 가이드 리뷰</Table.Cell>
                            <Table.Cell>
                                <p>- IA 현황판 (Front, Guide, History)</p>
                                <p>- 기본규칙 가이드</p>
                                <p>- Semantic UI, Librarys UI, Custom UI, Prototype</p>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>완료</Table.Cell>
                            <Table.Cell textAlign='center'>22-03-31</Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row verticalAlign='top' className='bg-purple'>
                            <Table.Cell>가이드에 IA 작성예시 추가</Table.Cell>
                            <Table.Cell>
                                <p>- 진행전, 진행중, 완료, 수정, 추가, 삭제, 제외, 보류 작성예시</p>
                                <p>- 수정, 추가, 삭제 진행시 상세내용에 주석 표기 예시</p>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>완료</Table.Cell>
                            <Table.Cell textAlign='center'>22-04-01</Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row verticalAlign='top' className='bg-purple'>
                            <Table.Cell>DatePicker, TimePicker</Table.Cell>
                            <Table.Cell>
                                <p>- 독립적인 라이브러리로 활성화 됨.  </p>
                                <p>- ButtomSheet 가이드에 포함되도록 업데이트</p>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>예정</Table.Cell>
                            <Table.Cell textAlign='center'></Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}


export default PageList
