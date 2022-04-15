import React from 'react'
import { Button } from "semantic-ui-react";

const ButtonPage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Buttons</h2>
            <p>공통 스타일은 Type별로 구분한다.</p>
            <p>상세 스타일은 Content별로 구분한다.</p>
            <p>옵션 스타일은 Primary, Secondary만 구분한다.</p>
            <h3 className='g_h3'>Types</h3>
            <h4 className='g_h4'>Base Type</h4>
            <div className='preview'>
                <Button type='button' className='base'>Button</Button>
                <Button type='button' className='base primary'>Button</Button>
                <br />
                <Button type='button' className='base' disabled>Button</Button>
                <Button type='button' className='base primary' disabled>Button</Button>
            </div>
            <h4 className='g_h4'>Select Type</h4>
            <div className='preview'>
                <Button type='button' className='select'>Button</Button>
                <Button type='button' className='select is_valued'>Button</Button>
                <br />
                <Button type='button' className='select' disabled>Button</Button>
                <Button type='button' className='select is_valued' disabled>Button</Button>
            </div>
            <h4 className='g_h4'>Text Type</h4>
            <div className='preview'>
                <Button type='button' className='text'>취소</Button>
                <Button type='button' className='text primary'>확인</Button>
                <br />
                <Button type='button' className='text' disabled>취소</Button>
                <Button type='button' className='text primary' disabled>확인</Button>
                <br />
                <Button type='button' className='text info'>더보기</Button>
                <Button type='button' className='text info' disabled>더보기</Button>
                <br />
                <Button type='button' className='text arrow_expend'>더보기</Button>
                <Button type='button' className='text arrow_expend' disabled>더보기</Button>
                <br />
                <Button type='button' className='text arrow_link'>전체보기</Button>
                <Button type='button' className='text arrow_link' disabled>전체보기</Button>
            </div>
            <h4 className='g_h4'>Pill Type</h4>
            <div className='preview'>
                <Button type='button' className='pill'>전체보기</Button>
                <Button type='button' className='pill secondary'>전체보기</Button>
                <br/>
                <Button type='button' className='pill' disabled>전체보기</Button>
                <Button type='button' className='pill secondary' disabled>전체보기</Button>
            </div>
            <h3 className='g_h3'>Content</h3>
            <h4 className='g_h4'>List Action</h4>
            <div className='preview'>
                <div className='list_action'>
                    <Button type='button' className='text arrow_expend'>더보기</Button>
                </div>
                <div className='list_action'>
                    <Button type='button' className='text arrow_link'>전체보기</Button>
                </div>
                <div className='list_action'>
                    <Button type='button' className='text arrow_link'><em className='keyword'>‘과정’</em>&nbsp; 검색 결과 전체보기 (132)</Button>
                </div>
            </div>
            <h4 className='g_h4'>Page Action</h4>
            <div className='preview'>
                <div className='out_sec' style={{'background':'#eee'}}>
                    {/* 실제 페이지는 content_foot 영역에 들어감 */}
                    <div className='page_action'>
                        <Button type='button' className='base primary'>Primary</Button>
                    </div>
                </div>
                <br/>
                <div className='out_sec' style={{'background':'#eee'}}>
                    <div className='page_action'>
                        <Button type='button' className='base'>Default</Button>
                        <Button type='button' className='base primary'>Primary</Button>
                    </div>
                </div>
            </div>

            <h2 className='g_h2'>Icon Buttons</h2>
            <h3 className='g_h3'>Layout</h3>
            <div className='preview'>
                <Button type='button' icon className='top'><span className='blind'>Scroll to top</span></Button>
            </div>
        </section>
    )
}

export default ButtonPage
