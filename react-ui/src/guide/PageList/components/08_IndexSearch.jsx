import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const IndexSearch = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='IndexSearch'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>검색/알림</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>입력 전</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>입력 중</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 전체</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 과정</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 뱃지</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 강사</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 강사 - 강사 상세_Introduce</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 강사 - 강사 상세_Lecture</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 강사 - 검색 필터</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>검색 결과 - 검색 결과_empty</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>알림</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Search/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default IndexSearch