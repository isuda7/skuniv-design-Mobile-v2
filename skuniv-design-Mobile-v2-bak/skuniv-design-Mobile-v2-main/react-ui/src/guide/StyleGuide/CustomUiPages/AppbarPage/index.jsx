import React from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { AppbarBasic, AppbarProfile, AppbarTitles } from '../../../../components';
import avatar80_01 from "../../../../assets/images/demo/avata-profile-80-01.png";

const AppbarPage = () => {
    return (
		<section className='g_sec'>
			<h2 className='g_h2'>Appbars</h2>
			<h3 className='g_h3'>Basic</h3>
			<div className='preview out_sec'>
                <AppbarBasic />
                <AppbarBasic title='Appbar Title 영역입니다.' />
                <AppbarBasic title='Appbar Title 이 길어지면 말줄임으로 점점점 표시됩니다.' />
                <AppbarBasic title='Title 영역입니다.'>
                    <Popup on='click' trigger={<Button type='button' icon className='more'><span className='blind'>더보기</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                </AppbarBasic>
                <AppbarBasic>
                    <Button type='button' icon className='study'><span className='blind'>학습목록</span></Button>
                    <Popup on='click' trigger={<Button type='button' icon className='more'><span className='blind'>더보기</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                </AppbarBasic>
			</div>
			<h3 className='g_h3'>Profile</h3>
            <div className='preview out_sec'>
                <AppbarProfile avata={avatar80_01} title='신사임당'>
                    <Popup on='click' trigger={<Button type='button' icon className='alim'><span className='blind'>알림</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                    <Button type='button' icon className='search'><span className='blind'>검색</span></Button>
                </AppbarProfile>
            </div>
			<h3 className='g_h3'>Multi Titles</h3>
            <div className='preview out_sec'>
                <AppbarTitles title='Appbar Title 이 길어지면 말줄임으로 점점점 표시됩니다.' subTitle='서브텍스트'>
                    <Popup on='click' trigger={<Button type='button' icon className='alim'><span className='blind'>알림</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                    <Button type='button' icon className='search'><span className='blind'>검색</span></Button>
                </AppbarTitles>
            </div>
			<h2 className='g_h2'>Theme Dark</h2>
            <h3 className='g_h3'>Demo</h3>
            <div className='preview out_sec theme_dark'>
                <AppbarProfile avata={avatar80_01} title='신사임당'>
                    <Popup on='click' trigger={<Button type='button' icon className='alim'><span className='blind'>알림</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                    <Button type='button' icon className='search'><span className='blind'>검색</span></Button>
                </AppbarProfile>

                <AppbarBasic title='Title 영역입니다.'>
                    <Popup on='click' trigger={<Button type='button' icon className='more'><span className='blind'>더보기</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                </AppbarBasic>

                <AppbarTitles title='Appbar Title 이 길어지면 말줄임으로 점점점 표시됩니다.'>
                    <Popup on='click' trigger={<Button type='button' icon className='alim'><span className='blind'>알림</span></Button>}>
                        <Popup.Content>
                            <p>Popup Content</p>
                        </Popup.Content>
                    </Popup>
                    <Button type='button' icon className='search'><span className='blind'>검색</span></Button>
                </AppbarTitles>
            </div>
		</section>
    )
}
export default AppbarPage
