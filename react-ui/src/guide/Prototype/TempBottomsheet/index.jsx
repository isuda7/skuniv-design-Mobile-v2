import React from 'react';
import { AppbarBasic } from '../../../components';
import { ModalBottomSheet01, ModalBottomSheet02, ModalBottomSheet03 } from './components';
import './style.scss';

const TempBottomsheet = () => {
    return (
        <div className='sub_wrapper'>
            <AppbarBasic title='Title 영역입니다.' />
            <main role="main" className='container'>
                <div className='content_body'>
                    <ModalBottomSheet01 />
                    <br/>
                    <br/>
                    <ModalBottomSheet02 />
                    <br/>
                    <br/>
                    <ModalBottomSheet03 />
                </div>
            </main>
        </div>
    )
}
export default TempBottomsheet