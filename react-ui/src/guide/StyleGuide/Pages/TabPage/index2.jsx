import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from '../../../../components';

const TabPage2 = () => {
    const [tabParam1, setTabParam1] = useState(1);
    const [tabParam2, setTabParam2] = useState(2);

    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Nav (Tab, Menu)</h2>
            <h3 className='g_h3'>Style1</h3>
            <div className='preview'>
                <Nav className='style1'>
                    <NavLink to='/guide/Tabs/' className='nav_item'>Category</NavLink>
                    <NavLink to='/guide/Tabs/index2' className='nav_item'>Certification</NavLink>
                </Nav>
            </div>

            <h3 className='g_h3'>Style2</h3>
            <div className='preview'>
                <Nav className='style2'>
                    <button type='button' className={'nav_item' + (tabParam1===0 ? ' active':'')} onClick={() => setTabParam1(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam1===1 ? ' active':'')} onClick={() => setTabParam1(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam1===2 ? ' active':'')} onClick={() => setTabParam1(2)}>Tab 3</button>
                </Nav>
                <Nav className='style2 wide'>
                    <button type='button' className={'nav_item' + (tabParam1===0 ? ' active':'')} onClick={() => setTabParam1(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam1===1 ? ' active':'')} onClick={() => setTabParam1(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam1===2 ? ' active':'')} onClick={() => setTabParam1(2)}>Tab 3</button>
                </Nav>
                <div className='nav_panels'>
                    { tabParam1===0 &&
                        <div className='nav_panel'>Tab 1 Content</div>
                    }
                    { tabParam1===1 &&
                        <div className='nav_panel'>Tab 2 Content</div>
                    }
                    { tabParam1===2 &&
                        <div className='nav_panel'>Tab 3 Content</div>
                    }
                </div>
            </div>
            <h3 className='g_h3'>Style3</h3>
            <div className='preview'>
                <Nav className='style3'>
                    <button type='button' className={'nav_item' + (tabParam2===0 ? ' active':'')} onClick={() => setTabParam2(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam2===1 ? ' active':'')} onClick={() => setTabParam2(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam2===2 ? ' active':'')} onClick={() => setTabParam2(2)}>Tab 3</button>
                </Nav>
                <div className='nav_panels'>
                    { tabParam2===0 &&
                        <div className='nav_panel'>Tab 1 Content</div>
                    }
                    { tabParam2===1 &&
                        <div className='nav_panel'>Tab 2 Content</div>
                    }
                    { tabParam2===2 &&
                        <div className='nav_panel'>Tab 3 Content</div>
                    }
                </div>
            </div>
        </section>
    )
}
export default TabPage2
