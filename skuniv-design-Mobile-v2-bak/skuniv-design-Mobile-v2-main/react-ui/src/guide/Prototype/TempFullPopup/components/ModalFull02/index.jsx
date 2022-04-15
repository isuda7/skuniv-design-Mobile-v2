import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModalFull02() {
	const [open, setOpen] = React.useState(false);

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button type='button' className='primary'>Full Popup 02</Button>}
			className='full'
		>
			<div className='modal_wrap'>
				<div className='modal_head'>
					<h3 className='modal_tit'>Heading</h3>
					<Button type='button' className='text primary'>등록</Button>
				</div>
				<div className='modal_body'>
					<div style={{'height':'25rem', 'background-color':'#eee'}}></div>
					<div style={{'height':'25rem', 'background-color':'#ddd'}}></div>
					<div style={{'height':'25rem', 'background-color':'#eee'}}></div>
					<div style={{'height':'25rem', 'background-color':'#ddd'}}></div>
				</div>
				<div className='modal_foot'>
					<div className='page_action'>
						<Button type='button' className='base'>버튼</Button>
						<Button type='button' className='base primary'>버튼</Button>
					</div>
				</div>
				<div className='modal_close'>
					<Button type='button' icon className='close' onClick={() => setOpen(false)}>닫기</Button>
				</div>
			</div>
		</Modal>
	)
}

export default ModalFull02