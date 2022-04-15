import React from "react";
import { Button } from "semantic-ui-react";
import { FullArea, NoData } from "../../../../components";
import NoDataImg1 from '../../../../assets/images/demo/confirm.png';
import NoDataImg2 from '../../../../assets/images/demo/alert.png';

const NodataPage = () => {
	return (
		<section className='g_sec'>
			<h2 className='g_h2'>No Data</h2>
			<h3 className='g_h3'>Styles</h3>
			<div className='preview'>
				<NoData>
					<p className='msg'>검색된 결과가 없습니다.</p>
				</NoData>
				<br />
				<NoData src={NoDataImg1}>
					<p className='msg'>등록된 결과가 없습니다.</p>
				</NoData>
				<br />
				<NoData src={NoDataImg2} alt='Alt값도 필요한 경우'>
					<p className='msg'>메세지가 길게 들어갑니다.<br />예외 케이스입니다.</p>
					<div className='btn-area'>
						<Button type='button' className='outline'>등록하기</Button>
					</div>
				</NoData>
			</div>
			<h3 className='g_h3'>Full Area</h3>
			<div className="preview">
				<div style={{'height':'400px', 'position':'relative', 'background-color':'#eee'}}>
					<FullArea>
						<NoData>
							<p className='msg'>검색된 결과가 없습니다.</p>
						</NoData>
					</FullArea>
				</div>
			</div>
		</section>
	)
}

export default NodataPage;
