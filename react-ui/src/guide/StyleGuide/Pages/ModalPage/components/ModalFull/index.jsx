import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModalFull() {
	const [open, setOpen] = useState(false);

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button type='button' className='primary'>Open Modal Full</Button>}
			className='full'
		>
			<div className='modal_wrap'>
				<div className='modal_head'>
					<h3 className='modal_tit'>Heading</h3>
				</div>
				<div className='modal_body'>
					modal_body
				</div>
				<div className='modal_foot'>
					modal_foot
				</div>
				<div className='modal_close'>
					<Button type='button' icon className='close' onClick={() => setOpen(false)}>닫기</Button>
				</div>
			</div>
		</Modal>
	)
}

export default ModalFull