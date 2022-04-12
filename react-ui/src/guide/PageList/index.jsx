import React from 'react';
import {Table} from 'semantic-ui-react';
import {IndexLogin,IndexOnboard,IndexMyHome,IndexCategory,IndexRecom,IndexCommunity,IndexMore,IndexSearch,IndexLearning} from './components';
import Gnb from './gnb';
import './style.scss';

const PageList = () => {
    return (
        <div className='ia_wrap'>
            <iframe src='#/Myhome/Main' frameBorder='0' height='760px' title='Prevoew' name='reactFrame'></iframe>
            <div className='ia_container'>
                <Gnb index="0" />
                <Table celled structured selectable unstackable>
                    <colgroup>
                        <col width='30%'/>
                        <col width='160px'/>
                        <col width='20%'/>
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

                    {/* 로그인 */}
                    <IndexLogin />

                    {/* 온보드 */}
                    <IndexOnboard />

                    {/* 마이홈 */}
                    <IndexMyHome />

                    {/* 학습전체 */}
                    <IndexCategory />

                    {/* 학습전체 */}
                    <IndexRecom />

                    {/* 커뮤니티 */}
                    <IndexCommunity />

                    {/* 더보기 */}
                    <IndexMore />

                    {/* 검색 */}
                    <IndexSearch />

                    {/* 학습 */}
                    <IndexLearning />
                </Table>
            </div>
        </div>
    )
}


export default PageList
