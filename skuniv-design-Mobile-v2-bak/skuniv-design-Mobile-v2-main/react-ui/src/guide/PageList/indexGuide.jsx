import React from 'react';
import {Table} from 'semantic-ui-react';
import {GuideSample, GuideSemantic, GuideLibrary, GuideCustom, GuidePrototype} from './components';
import Gnb from './gnb';
import './style.scss';

const PageList = () => {
    return (
        <div className='ia_wrap'>
            <iframe src='#/guide/GuideAll' frameBorder='0' height='760px' title='Prevoew' name='reactFrame'></iframe>
            <div className='ia_container'>
                <Gnb index="1" />
                <Table celled structured selectable unstackable>
                    <colgroup>
                        <col width='25%'/>
                        <col width='160px'/>
                        <col width='25%'/>
                        <col width='120px'/>
                        <col width='120px'/>
                        <col width=''/>
                        <col/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>화면명</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>화면 아이디</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>경로</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>작업자</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>수정일</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>상세내용</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {/* Samples */}
                    <GuideSample />

                    {/* GuideSemantic */}
                    <GuideSemantic />

                    {/* GuideOther */}
                    <GuideLibrary />

                    {/* Components */}
                    <GuideCustom />

                    {/* Prototype */}
                    <GuidePrototype />
                </Table>
            </div>
        </div>
    )
}


export default PageList
