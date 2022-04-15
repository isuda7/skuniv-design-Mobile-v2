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
				<Button onClick={this.handleTriggerClick} className='primary'>Open Modal Confirm</Button>
				<TransitionablePortal {...{ open }} {...{ transition }}>
					<ModalComponent open className='alert'>
						<ModalComponent.Header>
							<h3>확인</h3>
						</ModalComponent.Header>
						<ModalComponent.Content>
							<div className="msg">
								<p>제목을 입력해 주세요.</p>
								<p>제목은 최대 100자 까지 작성 가능합니다.</p>
							</div>
							<div className="footer">
								<Button type="button" className="text" onClick={this.handleClose}>취소</Button>
								<Button type="button" className="text primary" onClick={this.handleClose}>확인</Button>
							</div>
						</ModalComponent.Content>
					</ModalComponent>
				</TransitionablePortal>
			</Fragment>
		);
	}
}

Modal.defaultProps = DEFAULT_PROPS;
