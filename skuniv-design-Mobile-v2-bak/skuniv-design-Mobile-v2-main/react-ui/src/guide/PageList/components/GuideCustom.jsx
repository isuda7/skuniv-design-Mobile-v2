import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const GuideCustom = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='GuideCustom'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>Customs</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>전체보기</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/CustomUiPages' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Appbar</Table.Cell>
				<Table.Cell textAlign='center'>
					{/* (<span>AL-MA-10</span>) */}
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/AppbarPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Input Clear</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/InputClearPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>No Data</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/NodataPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Result Data</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/ResultDataPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Pie</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/PiePage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Thumb</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/ThumbPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Board Sec</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/BoardPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Board Items</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/BoardItemPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Cards</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/CardPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default GuideCustom