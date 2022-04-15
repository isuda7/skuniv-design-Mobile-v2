import React from "react";
import { Link } from "react-router-dom";
import { ResultData } from "../../../../components";
import NoDataImg1 from '../../../../assets/images/demo/confirm.png';
import NoDataImg2 from '../../../../assets/images/demo/alert.png';

const ResultDataPage = () => {
	return (
		<section className='g_sec'>
			<h2 className='g_h2'>Result Data</h2>
			<div className='preview'>
				<ResultData className='is_successed'>
					<p className='msg'>등록 완료 되었습니다.</p>
				</ResultData>
				<br />
				<ResultData className='is_failed' src={NoDataImg1}>
					<p className='msg'>등록 실패 하였습니다.</p>
				</ResultData>
				<br />
				<ResultData src={NoDataImg2} alt='Alt값도 필요한 경우'>
					<p className='msg'>안내 메세지입니다.</p>
					<div className='btn-area'>
						<Link to='' className='outline'>돌아가기</Link>
					</div>
				</ResultData>
			</div>
		</section>
	)
}

export default ResultDataPage;