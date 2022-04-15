import React, { Fragment } from "react";
import { Modal as ModalComponent, Button, TransitionablePortal, Radio } from "semantic-ui-react";
import { SelectList } from "../../../../../components";

export const DEFAULT_PROPS = {
	transition: {
		animation: "scale",
		duration: 300
	}
};

export default class ModalBottomSheet01 extends React.Component {
	state = {
		radio: 'selectRdo11',
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
				<Button onClick={this.handleTriggerClick} className='select'>Select Bottomsheet</Button>
				<TransitionablePortal {...{ open }} {...{ transition }}>
					<ModalComponent open onClose={this.handleClose} className='bottomsheet'>
						<div className="modal_wrap">
							<div className='modal_body'>
								<SelectList>
									<Radio label='Select All' name='selectRdo1' value='selectRdo11' className='select_option'
										checked={this.state.radio === 'selectRdo11'}
										onChange={(e, data) => this.setState({radio: data.value})}
									/>
									<Radio label='Select Item' name='selectRdo1' value='selectRdo12' className='select_option'
										checked={this.state.radio === 'selectRdo12'}
										onChange={(e, data) => this.setState({radio: data.value})}
									/>
									<Radio label='Select Item' name='selectRdo1' value='selectRdo13' className='select_option'
										checked={this.state.radio === 'selectRdo13'}
										onChange={(e, data) => this.setState({radio: data.value})}
									/>
								</SelectList>
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

ModalBottomSheet01.defaultProps = DEFAULT_PROPS;
