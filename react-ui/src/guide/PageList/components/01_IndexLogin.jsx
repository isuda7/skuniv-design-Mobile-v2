import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const IndexLogin = () => {
	return (
		<Table.Body>
			<Table.Row verticalAlign='top' id='IndexLogin'>
				<Table.Cell colSpan='6' className='table-tit'>
					<span className='text-bold'>로그인</span>
				</Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Login 입력 전</Table.Cell>
				<Table.Cell textAlign='center'>
					(<span>LO-01-01</span>)
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>Login 입력 후</Table.Cell>
				<Table.Cell textAlign='center'>
					(<span>LO-01-01-case</span>)
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>비밀번호 초기화 인증번호 발송 전</Table.Cell>
				<Table.Cell textAlign='center'>
					(<span>LO-02-01</span>)
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>비밀번호 초기화 인증번호 발송 후</Table.Cell>
				<Table.Cell textAlign='center'>
					(<span>LO-02-01-case</span>)
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>비밀번호 재설정</Table.Cell>
				<Table.Cell textAlign='center'>
					(<span>LO-02-02</span>)
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
			<Table.Row verticalAlign='top'>
				<Table.Cell>비밀번호 재설정(비밀번호 불일치)</Table.Cell>
				<Table.Cell textAlign='center'>
					(<span>LO-02-02-case</span>)
				</Table.Cell>
				<Table.Cell className='link-address'>
					<Link to='/Login/' target='reactFrame' />
				</Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell textAlign='center'></Table.Cell>
				<Table.Cell></Table.Cell>
			</Table.Row>
		</Table.Body>
	)
}
export default IndexLogin