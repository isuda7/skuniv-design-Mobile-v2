import React from 'react';
import {
    CardBadgeHor,
    CardLearningVer,
    CardMyBadgeHor,
    CardPlaylistBasic1,
    CardPlaylistBasic2,
    CardPlaylistVer,
    CardTopicVer,
} from '../../../../components';
import Thumb_01 from '../../../../assets/images/demo/thumb-01.png';
import Badge_01 from "../../../../assets/images/demo/thumb-badge01.png";
import avatar80_01 from "../../../../assets/images/demo/avata-profile-80-01.png";

// import {} from "semantic-ui-react";

const CardPage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Card Basic</h2>
            <h3 className='g_h3'>Playlist</h3>
            <h4 className='g_h4'>Playlist Type1</h4>
            <div className='preview'>
                <CardPlaylistBasic1
                    title='일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십'
                    name='전혜림가나다라바사아자차카타파하아자차'
                    avata={avatar80_01}
                    count='3'
                />
            </div>
            <h4 className='g_h4'>Playlist Type2</h4>
            <div className='preview'>
                <CardPlaylistBasic2
                    typeClass='make'
                    typeName='내가만든'
                    title='일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십'
                    name='전혜림가나다라바사아자차카타파하아자차'
                    avata={avatar80_01}
                    count='99+'
                />
                <CardPlaylistBasic2
                    typeClass='buy'
                    typeName='내가담은'
                    title='일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십'
                    name='전혜림가나다라바사아자차카타파하아자차'
                    avata={avatar80_01}
                    count='3'
                />
                <CardPlaylistBasic2
                    typeClass='recom'
                    typeName='추천받은'
                    title='일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십'
                    name='전혜림가나다라바사아자차카타파하아자차'
                    avata={avatar80_01}
                    count='30'
                />
            </div>

            <h2 className='g_h2'>Card Vertical</h2>
            <h3 className='g_h3'>Learning</h3>
            <div className='preview'>
                <CardLearningVer
                    thumb={Thumb_01}
                    category='카테고리명'
                    title='코스명이 들어갑니다 코스명이 들어가요 코스명이요 세줄까지 들어가요.'
                    count='4.8'
                />
            </div>

            <h3 className='g_h3'>Playlist</h3>
            <div className='preview'>
                <CardPlaylistVer
                    thumb={Thumb_01}
                    avata={avatar80_01}
                    name='꿈꾸는하루 꿈꾸는하루 꿈꾸는하루 이틀 삼사오육일'
                    title='리스트명최대두줄리스트명최대두줄 리스트명최대두줄리스트명최대두줄'
                />
            </div>

            <h3 className='g_h3'>Topic</h3>
            <div className='preview'>
                <CardTopicVer
                    thumb={Thumb_01}
                    title='핫토픽이름이들어갑니다핫토픽이름핫토픽이름'
                    count='7'
                />
            </div>

            <h2 className='g_h2'>Card Horizontal</h2>
            <h3 className='g_h3'>Badge</h3>
            <div className='preview'>
                <CardBadgeHor
                    thumb={Badge_01}
                    category='카테고리명'
                    title='Citizen Data Scientist (No-Code)'
                    count='2'
                    total='11'
                />
            </div>
            <h3 className='g_h3'>My Badge</h3>
            <div className='preview'>
                <CardMyBadgeHor
                    thumb={Badge_01}
                    category='카테고리명'
                    title='Citizen Data Scientist (No-Code)'
                    date='2022.03.31'
                />
            </div>

        </section>
    )
}

export default CardPage
