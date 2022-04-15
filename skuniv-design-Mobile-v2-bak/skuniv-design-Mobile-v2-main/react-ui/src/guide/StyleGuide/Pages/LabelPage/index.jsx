import React from 'react'
import { Label, Icon } from "semantic-ui-react";

const LabelPage = () => {
	return (
		<section className='g_sec'>
			<h2 className='g_h2'>Labels</h2>
			<h3 className='g_h3'>Text + Image</h3>
			<div className='preview'>
				<Label className='rate_count'><Icon className='rate' /><span className='count'>4.8</span></Label>
			</div>
		</section>
	)
}

export default LabelPage
