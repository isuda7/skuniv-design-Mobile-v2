import React, { Fragment } from "react";
import { Modal as ModalComponent, Button, TransitionablePortal } from "semantic-ui-react";

export const DEFAULT_PROPS = {
	transition: {
		animation: "scale",
		duration: 300
	}
};

export default class Modal extends React.Component {
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
				<Button onClick={this.handleTriggerClick} className='primary'>Open Modal Basic</Button>
				<TransitionablePortal {...{ open }} {...{ transition }}>
					<ModalComponent open  onClose={this.handleClose} className='bottomsheet'>
						<div className="modal_wrap">
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
								<Button type='button' icon className='close' onClick={this.handleClose}>닫기</Button>
							</div>
						</div>
					</ModalComponent>
				</TransitionablePortal>
			</Fragment>
		);
	}
}

Modal.defaultProps = DEFAULT_PROPS;
