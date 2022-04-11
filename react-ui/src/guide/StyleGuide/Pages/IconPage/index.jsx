import React from 'react';
import { Icon, Image } from "semantic-ui-react";
import avatar80_01 from "../../../../assets/images/demo/avata-profile-80-01.png";
import avatar80_02 from "../../../../assets/images/demo/profile-80.png";
import avatar80_03 from "../../../../assets/images/demo/pic_profile_default.png";
// import avatar48_01 from "../../../../assets/images/demo/avata-profile-48-01.svg";
// import avatar80_02 from "../../../../assets/images/demo/avata-profile-80-02.png";
// import avatar100_01 from "../../../../assets/images/demo/avata-profile-100-01.png";
import { Link } from 'react-router-dom';

const IconPage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Icons/Images</h2>
            <div className='preview'>
                <Icon loading name='spinner' />
                <Icon className='' />
            </div>

            <h3 className='g_h3'>Avata</h3>
            <h4 className='g_h4'>Default</h4>
            <div className='preview'>
                {/* 일반 아바타 */}
                일반 아바타 : <span className='avata size_36'><Image src={avatar80_01} alt='Profile Avata' /></span>
                <br />
                {/* 링크 아바타 */}
                링크 아바타 : <Link to="#" className='avata size_36'><Image src={avatar80_02} alt='Profile Avata' /></Link>
                <br />
                {/* 버튼 아바타 */}
                버튼 아바타 : <button type='button' className='avata size_36'><Image src={avatar80_03} alt='Profile Avata' /></button>
            </div>
            <h4 className='g_h4'>Sizes</h4>
            <div className='preview'>
                <p>컨텐츠별 사이즈는 컨텐츠에서 처리한다.</p>
            </div>

            <h3 className='g_h3'>Guide</h3>
            <div className='preview'>
                Guide Preview
            </div>
        </section>
    )
}

export default IconPage
