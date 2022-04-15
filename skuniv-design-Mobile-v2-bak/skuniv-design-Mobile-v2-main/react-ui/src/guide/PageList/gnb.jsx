import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Gnb = (props) => {

    useEffect(() => {
        document.querySelectorAll(".g_menu a").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                let target = btn.getAttribute('href');
                let posTop = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset - 74;
                // gsap.to('html', { duration: 1, scrollTo: { y: 100 } });
                // console.log(document.querySelector(target).getBoundingClientRect().top + window.pageYOffset);
                window.scrollTo(0, posTop);
                e.preventDefault();
            });
        });
    }, []);


    return (
        <div className='g_gnb_area'>
            <nav className='g_gnb'>
                <NavLink to='/' className='ui button'>Index</NavLink>
                <NavLink to='/pageList/indexGuide' className='ui button'>Guide</NavLink>
                {/* <NavLink to='/pageList/indexHistory' className='ui button'>History</NavLink> */}
            </nav>
            {
                (props.index === "0") &&
                <nav className='g_menu'>
                    <a href='#IndexLogin'>로그인</a>
                    <a href='#IndexOnboard'>온보딩</a>
                    <a href='#IndexMyHome'>MyHome</a>
                    <a href='#IndexCategory'>학습전체</a>
                    <a href='#IndexRecom'>커뮤니티</a>
                    <a href='#IndexComunity'>추천</a>
                    <a href='#IndexMore'>더보기</a>
                    <a href='#IndexSearch'>알림/검색</a>
                    <a href='#IndexLearning'>학습과정</a>
                </nav>
            }
            {
                (props.index === "1") &&
                <nav className='g_menu'>
                    <a href='#GuideSample'>작성예시</a>
                    <a href='#GuideSemantic'>Semantics</a>
                    <a href='#GuideLibrary'>Librarys</a>
                    <a href='#GuideCustom'>Customs</a>
                    <a href='#GuidePrototype'>Prototypes</a>
                </nav>
            }
            {/* {
                (props.index === "2") &&
                <nav className='g_menu'>
                    <a href='#HistoryAfter'>진행목록</a>
                    <a href='#HistoryBefore'>예정목록</a>
                </nav>
            } */}
        </div>
    )
}
export default Gnb
