import React from 'react';
import { Label } from 'semantic-ui-react';
import { Thumb } from '../../../../components';
import { Link } from 'react-router-dom';
import Badge_01 from '../../../../assets/images/demo/thumb-badge01.png';
import './style.scss';

const LearningHead = () => {
    return (
		<div className='learning_head'>
			<div className='overay_area'>
				<div className='overay_inner'>
					<div className='title_area'>
						<em className='sub_txt'>Leadership</em>
						<p className='title'><strong>Boundaryless Collaboration, 세상에서 협업이 제일 쉬웠어요</strong></p>
					</div>
					<div className='info_area'>
						<Label className='time normal'>1h 6m</Label>
						<Label className='interm normal'>Intermediate</Label>
						<Label className='rate normal'>4.0</Label>
					</div>
				</div>
			</div>
			<div className='badge_path'>
				<Link to='' className='badge_inner'>
					<div className='badge_thumb'>
						<Thumb src={Badge_01} alt='' />
					</div>
					<div className='badge_body'>
						<div className='sub_txt'>획득 가능 뱃지</div>
						<p className='title'><strong>Scenario Planning : Essential Scenario Planning : Essential Scenario Planning : Essential</strong></p>
					</div>
				</Link>
			</div>
		</div>
    )
}
export default LearningHead