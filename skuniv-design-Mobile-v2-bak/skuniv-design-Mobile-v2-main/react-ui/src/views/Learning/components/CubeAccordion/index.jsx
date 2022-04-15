import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion, Label } from "semantic-ui-react";
import CubeItem from "../CubeItem";
import './style.scss';

class CubeAccordion extends Component {
	state = { activeIndex: 0 }

	handleClick = (e, titleProps) => {
		const { index } = titleProps
		const { activeIndex } = this.state
		const newIndex = activeIndex === index ? -1 : index

		this.setState({ activeIndex: newIndex })
	}

	render() {
		const { activeIndex } = this.state;

		return (
			<Accordion className="cube_accordion">
				<Accordion.Title
					active={activeIndex === 0}
					index={0}
					onClick={this.handleClick}
				>
                    <div className="cube_expand">
                        <div className='expand_body'>
                            <p className='title'><strong>혁신 리더의 다이어리 (Leader’s Diaryddd) 두줄이 되면 한줄처리</strong></p>
                            <div className='sub_txt'>총 <em>1개</em> 강의 구성</div>
                        </div>
                    </div>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
					<CubeItem className='video is_state1'>
                        <Link to='' className='item_inner'>
                            <div className='item_thumb'>
                                <Label className='played per0'><span className='blind'>Cube</span></Label>
                            </div>
                            <div className='item_body'>
                                <p className='title'><strong>Cube : 왜 혁신 리더의 Diary인가?</strong></p>
                                <div className='sub_txt'>Video<i className='split'></i>3m</div>
                            </div>
                        </Link>
                    </CubeItem>
				</Accordion.Content>
				<Accordion.Title
					active={activeIndex === 1}
					index={1}
					onClick={this.handleClick}
				>
                    <div className="cube_expand">
                        <div className='expand_body'>
                            <p className='title'><strong>혁신 리더의 다이어리 (Leader’s Diaryddd) 두줄이 되면 한줄처리</strong></p>
                            <div className='sub_txt'>총 <em>1개</em> 강의 구성</div>
                        </div>
                    </div>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 1}>
					<CubeItem className='video is_state3'>
                        <Link to='' className='item_inner'>
                            <div className='item_thumb'>
                                <Label className='played per100'><span className='blind'>Cube</span></Label>
                            </div>
                            <div className='item_body'>
                                <p className='title'><strong>Cube : 왜 혁신 리더의 Diary인가?</strong></p>
                                <div className='sub_txt'>Video<i className='split'></i>3m</div>
                            </div>
                        </Link>
                    </CubeItem>
				</Accordion.Content>
			</Accordion>
		)
	}
}
export default CubeAccordion;