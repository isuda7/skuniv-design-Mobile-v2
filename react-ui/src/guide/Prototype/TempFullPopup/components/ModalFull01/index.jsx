import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModalFull01() {
	const [open, setOpen] = React.useState(false);

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button type='button' className='primary'>Full Popup 01</Button>}
			className='full'
		>
			<div className='modal_wrap'>
				<div className='modal_head'>
					<h3 className='modal_tit'><span className='blind'>Blind Heading</span></h3>
					<Button type='button' className='text primary'>등록</Button>
				</div>
				<div className='modal_body'>
					<div style={{'height':'25rem', 'background-color':'#eee'}}></div>
					<div style={{'height':'25rem', 'background-color':'#ddd'}}></div>
					<div style={{'height':'25rem', 'background-color':'#eee'}}></div>
					<div style={{'height':'25rem', 'background-color':'#ddd'}}></div>
				</div>
				<div className='modal_close'>
					<Button type='button' icon className='close' onClick={() => setOpen(false)}>닫기</Button>
				</div>
			</div>
		</Modal>
	)
}

export default ModalFull01