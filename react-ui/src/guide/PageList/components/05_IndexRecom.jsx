import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const IndexRecom = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='IndexRecom'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>추천</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - 추천 Main</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - Playlist 전체보기 (둘러보기)</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - Playlist 전체보기 (둘러보기) - Playlist</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - Playlist 전체보기 (둘러보기) - Comments</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - Hot Topic</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - 추천 전체보기</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - 핵인싸 전체보기</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - 신규과정 전체보기</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>추천 - 인기과정 전체보기</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Recom/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default IndexRecom