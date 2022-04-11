import React from 'react';
import {ContentHead, ContentBody} from './components';
import './style.css';

const Sample = () => {
    return (
        <main role="main" as={'main'} className='container'>
            <ContentHead />
            <ContentBody />
        </main>
    )
}
export default Sample