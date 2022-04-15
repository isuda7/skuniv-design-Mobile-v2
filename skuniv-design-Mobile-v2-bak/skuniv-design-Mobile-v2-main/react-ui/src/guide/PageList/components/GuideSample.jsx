import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';

const GuideSample = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='GuideSample'>
				<Table.Cell colSpan='5' className='table-tit'>
					<span className='text-bold'>작성예시</span>
				</Table.Cell>
				<Table.Cell className='table-tit'>
					<p>YY-MM-DD [그룹] [요소] [내용]</p>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>진행전, 진행중</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>완료</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'>
					<p>22-04-18</p>
				</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>수정/추가/삭제</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'>
					<p>22-04-18</p>
				</Table.Cell>
				<Table.Cell>
					<p>22-04-15 코멘트 버튼모두 수정</p>
					<p>22-04-18 학습카드 날짜항목 추가</p>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top' className='bg_gray'>
				<Table.Cell>제외</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'>
					<p>22-04-01</p>
				</Table.Cell>
				<Table.Cell>
					<p>22-04-16 페이지 삭제 사유</p>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top' className='bg_yellow'>
				<Table.Cell>보류</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame'/>
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default GuideSample