import React, { Fragment } from "react";
import { Modal as ModalComponent, Button, TransitionablePortal } from "semantic-ui-react";

export const DEFAULT_PROPS = {
	transition: {
		animation: "scale",
		duration: 300
	}
};

export default class ModalBottomSheet03 extends React.Component {
	state = {
		open: false
	};

	setOpen = open => {
		this.setState((prevState, props) => ({
			open
		}));
	};

	handleTriggerClick = event => {
		this.setOpen(true);
	};

	handleClose = (event, data) => {
		this.setOpen(false);
	};

	render() {
		const { open } = this.state;
		const { transition } = this.props;

		return (
			<Fragment>
				<Button onClick={this.handleTriggerClick} className='primary'>Custom Bottomsheet</Button>
				<TransitionablePortal {...{ open }} {...{ transition }}>
					<ModalComponent open onClose={this.handleClose} className='bottomsheet'>
						<div className="modal_wrap">
							<div className='modal_head'>
								<h3 className='modal_tit'>Heading</h3>
							</div>
							<div className='modal_body'>
								<div style={{'height':'20rem', 'background':'#eee'}}></div>
								<div style={{'height':'20rem', 'background':'#ddd'}}></div>
								<div style={{'height':'20rem', 'background':'#eee'}}></div>
								<div style={{'height':'20rem', 'background':'#ddd'}}></div>
							</div>
							<div className='modal_foot'>
								<div className='page_action'>
									<Button type='button' className='base primary' onClick={this.handleClose}>확인</Button>
								</div>
							</div>
							<div className='modal_close'>
								<Button type='button' icon className='close' onClick={this.handleClose}>닫기</Button>
							</div>
						</div>
					</ModalComponent>
				</TransitionablePortal>
			</Fragment>
		);
	}
}

ModalBottomSheet03.defaultProps = DEFAULT_PROPS;
