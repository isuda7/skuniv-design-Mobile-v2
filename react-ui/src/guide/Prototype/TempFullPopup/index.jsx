import React from 'react';
import { AppbarBasic } from '../../../components';
import { ModalFull01, ModalFull02 } from './components/';
import './style.scss';

const TempFullPopup01 = () => {
    return (
        <div className='sub_wrapper'>
            <AppbarBasic title='Title 영역입니다.' />
            <main role="main" className='container'>
                <div className='content_body'>
                    <ModalFull01 />
                    <br/>
                    <br/>
                    <ModalFull02 />
                </div>
            </main>
        </div>
    )
}
export default TempFullPopup01