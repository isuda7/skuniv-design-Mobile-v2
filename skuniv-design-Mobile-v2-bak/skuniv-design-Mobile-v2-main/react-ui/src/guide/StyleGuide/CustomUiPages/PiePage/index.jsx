import React from "react";
import { Pie } from "../../../../components";

const PiePage = () => {
	return (
		<section className='g_sec'>
			<h2 className='g_h2'>Pie</h2>
			<div className='preview'>
				<p className='g_info'>크기 필수 설정 : size="56|200"</p>
				<p className='g_info'>값이 있는 경우 : value="0 ~ 360"</p>
				<p className='g_info'>값이 없는 경우 : type="empty"</p>
				<Pie size='56' value='60' />
				<Pie size='56' type='empty' />
				<Pie size='200' value='150' />
				<Pie size='200' type='empty' />
			</div>
		</section>
	)
}

export default PiePage;