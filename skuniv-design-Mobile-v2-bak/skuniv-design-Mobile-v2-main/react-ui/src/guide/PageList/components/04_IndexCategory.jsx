import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const IndexCategory = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='IndexCategory'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>학습전체</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Category</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Category - Category List (고정영역 1d/2d)</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Category - Category List (고정영역 1d/2d) - Channel 선택 1depth</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Category - Category List (고정영역 1d/2d) - Channel 선택 2depth</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Certification - Certification List</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Certification - Certification List_empty</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Certification - Level 필터 (공통)</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Certification - Level 필터 (공통) - Certification 소개 (도전 전/도전 중)</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Certification - Level 필터 (공통) - Learning Path (도전 전/도전 중)</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>관심채널 - 관심채널 List</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>관심채널 - 관심채널 삭제 (얼럿)</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Category/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default IndexCategory