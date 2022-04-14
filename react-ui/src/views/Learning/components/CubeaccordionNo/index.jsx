import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion, Label } from "semantic-ui-react";
import CubeItem from "../CubeItem";
import './style.scss';

class CubeaccordionNo extends Component {
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
			<Accordion className="cubeaccordion_no">
				<div className="cube_sort">
					<span className="sort_no">차수</span>
					<span className="sort_date">학습기간</span>
				</div>
				<Accordion.Title
					active={activeIndex === 0}
					index={0}
					onClick={this.handleClick}
				>
                    <div className="cube_expand2">
                        <div className='expand_body2'>
							<strong className='title'>100</strong>
							<span className='date'>2021.12.02 ~ 2022.03.04</span>
                        </div>
                    </div>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
					<div className="inner_wrap">
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>수강신청</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>학습기간</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>장소</strong>
								<span className='date'>온라인</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>강사</strong>
								<span className='date'>이영운</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>정원정보</strong>
								<span className='date'>3/60</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>담당자</strong>
								<span className='date'>asdf@sk.com</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>취소패널티</strong>
								<span className='date'>없음</span>
							</div>
						</div>
					</div>
				</Accordion.Content>
				<Accordion.Title
					active={activeIndex === 1}
					index={1}
					onClick={this.handleClick}
				>
                    <div className="cube_expand2">
                        <div className='expand_body2'>
							<strong className='title'>99</strong>
							<span className='date'>2021.12.02 ~ 2022.03.04</span>
                        </div>
                    </div>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 1}>
					<div className="inner_wrap">
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>수강신청</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>학습기간</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>장소</strong>
								<span className='date'>온라인</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>강사</strong>
								<span className='date'>이영운</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>정원정보</strong>
								<span className='date'>3/60</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>담당자</strong>
								<span className='date'>asdf@sk.com</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>취소패널티</strong>
								<span className='date'>없음</span>
							</div>
						</div>
					</div>
				</Accordion.Content>
				<br />
				<div className="cube_sort">
					<span className="sort_no">차수</span>
					<span className="sort_date">학습기간</span>
				</div>
				<Accordion.Title
					active={activeIndex === 0}
					index={0}
					onClick={this.handleClick}
				>
                    <div className="cube_expand2">
                        <div className='expand_body2'>
							<span className="btn_check"></span>
							<strong className='title space'>100</strong>
							<span className='date'>2021.12.02 ~ 2022.03.04</span>
                        </div>
                    </div>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
					<div className="inner_wrap">
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>수강신청</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>학습기간</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>장소</strong>
								<span className='date'>온라인</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>강사</strong>
								<span className='date'>이영운</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>정원정보</strong>
								<span className='date'>3/60</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>담당자</strong>
								<span className='date'>asdf@sk.com</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>취소패널티</strong>
								<span className='date'>없음</span>
							</div>
						</div>
					</div>
				</Accordion.Content>
				<Accordion.Title
					active={activeIndex === 1}
					index={1}
					onClick={this.handleClick}
				>
                    <div className="cube_expand2">
                        <div className='expand_body2'>
							<span className="btn_check"></span>
							<strong className='title space'>99</strong>
							<span className='date'>2021.12.02 ~ 2022.03.04</span>
                        </div>
                    </div>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 1}>
					<div className="inner_wrap">
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>수강신청</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>학습기간</strong>
								<span className='date'>2021.12.02 ~ 2022.03.04</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>장소</strong>
								<span className='date'>온라인</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>강사</strong>
								<span className='date'>이영운</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>정원정보</strong>
								<span className='date'>3/60</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>담당자</strong>
								<span className='date'>asdf@sk.com</span>
							</div>
						</div>
						<div className='inner_expand2'>
							<div className='expand_body2'>
								<strong className='title'>취소패널티</strong>
								<span className='date'>없음</span>
							</div>
						</div>
					</div>
				</Accordion.Content>
			</Accordion>
		)
	}
}
export default CubeaccordionNo;