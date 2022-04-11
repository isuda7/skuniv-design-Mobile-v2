import React, { Fragment } from "react";
import { Modal as ModalComponent, Button, TransitionablePortal } from "semantic-ui-react";
import { PickerList } from "../../../../../components";
import SwiperHour from './SwiperHour';
import SwiperMinute from './SwiperMinute';
import SwiperHalf from "./SwiperHalf";

export const DEFAULT_PROPS = {
	transition: {
		animation: "scale",
		duration: 300
	}
};

export default class ModalBottomSheet02 extends React.Component {
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
				<Button onClick={this.handleTriggerClick} className='primary'>Picker Bottomsheet</Button>
				<TransitionablePortal {...{ open }} {...{ transition }}>
					<ModalComponent open onClose={this.handleClose} className='bottomsheet'>
						<div className="modal_wrap">
							<div className='modal_head'>
								<h3 className="modal_tit">시간변경</h3>
							</div>
							<div className='modal_body'>
								<PickerList>
									<div className="picker-item">
										<SwiperHalf swipeName='swiper_hour' />
									</div>
									<div className="picker-item">
										<SwiperHour swipeName='swiper_hour' />
									</div>
									<div className="picker-item">
										<SwiperMinute swipeName='swiper_minute' />
									</div>
								</PickerList>
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

ModalBottomSheet02.defaultProps = DEFAULT_PROPS;
