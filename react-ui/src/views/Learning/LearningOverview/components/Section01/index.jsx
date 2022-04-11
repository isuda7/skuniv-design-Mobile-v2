import React from 'react';
import { Board } from '../../../../../components';
import './style.css';

const Section01 = () => {
    return (
        <Board>
            <div className='board_head'>
                <div className='board_count'>
                    <span className='total'>총</span>
                    <em className='count'>0</em>
                    <span className='unit'>개 강의 구성</span>
                </div>
            </div>
        </Board>
    )
}

export default Section01