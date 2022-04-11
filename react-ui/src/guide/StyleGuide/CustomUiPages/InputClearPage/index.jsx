import React from "react";
import { InputClear } from "../../../../components";

const InputClearPage = () => {
	return (
		<section className='g_sec'>
			<h2 className='g_h2'>Input Search</h2>
			<div className='preview'>
				<InputClear value="삭제전용 기본폼입니다." />
				<br />
				<InputClear placeholder='검색어를 입력하세요.' search />
				<br />
				<InputClear value="입력값" search />
			</div>
		</section>
	)
}

export default InputClearPage;