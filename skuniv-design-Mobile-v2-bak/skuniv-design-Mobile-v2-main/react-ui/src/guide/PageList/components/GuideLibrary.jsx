import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const GuideLibrary = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='GuideLibrary'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>Librarys</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Swipes</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/SwipePage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default GuideLibrary