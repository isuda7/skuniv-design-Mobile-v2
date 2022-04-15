import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const GuideSemantic = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='GuideSemantic'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>Semantics</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>전체보기</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/GuideAll' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>코딩규칙가이드</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/DefaultPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Buttons, Icons, Labels, Badges, Diviers</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/ElementPageGroup' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Forms</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/FormPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top' className='bg_yellow'>
				<Table.Cell>Tables</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/TablePage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell>Semantic UI 사용안함</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top' className='bg_yellow'>
				<Table.Cell>Bullets, Gorups</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/ListsPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell>Semantic UI 사용안함</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Graph, Progress, Gage</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/ProgressPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Step, Tabs, Menus</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/TabPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Accordions</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/AccordionPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Drag &amp; Drop</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/DragDropPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Alert, Confirm, Basic, Buttom Sheet</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/ModalPage' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-08</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>ETC</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/guide/EtcPageGroup' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'>조찬기</Table.Cell>
				<Table.Cell textAlign='center'>22-04-01</Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default GuideSemantic