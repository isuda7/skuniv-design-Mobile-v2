import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Step } from '../../../../components';

const TabPage = () => {
    const [tabParam1, setTabParam1] = useState(0);
    const [tabParam2, setTabParam2] = useState(0);
    const [tabParam3, setTabParam3] = useState(0);
    const [tabParam4, setTabParam4] = useState(0);
    const [tabParam5, setTabParam5] = useState(0);
    const [tabParam6, setTabParam6] = useState(0);

    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Step</h2>
            <div className='preview'>
                <Step className='style1'>
                    <span className='step_item is_comped'><span className='blind'>Step 1</span></span>
                    <span className='step_item'><span className='blind'>Step 2</span></span>
                    <span className='step_item'><span className='blind'>Step 3</span></span>
                </Step>
                <br/>
                <Step className='style1'>
                    <span className='step_item is_comped'><span className='blind'>Step 1</span></span>
                    <span className='step_item is_comped'><span className='blind'>Step 2</span></span>
                    <span className='step_item'><span className='blind'>Step 3</span></span>
                </Step>
                <br/>
                <Step className='style1'>
                    <span className='step_item is_comped'><span className='blind'>Step 1</span></span>
                    <span className='step_item is_comped'><span className='blind'>Step 2</span></span>
                    <span className='step_item is_comped'><span className='blind'>Step 3</span></span>
                </Step>
            </div>

            <h2 className='g_h2'>Nav (Tab, Menu)</h2>
            <h3 className='g_h3'>Style1</h3>
            <div className='preview'>
                <Nav className='style1'>
                    <Link to='/guide/Tabs/' className={'nav_item' + (tabParam1===0 ? ' is_active':'')} onClick={() => setTabParam1(0)}>Category</Link>
                    <Link to='/guide/Tabs/index2' className={'nav_item' + (tabParam1===1 ? ' is_active':'')} onClick={() => setTabParam1(1)}>Certification</Link>
                </Nav>
            </div>

            <h3 className='g_h3'>Style2</h3>
            <div className='preview'>
                <Nav className='style2'>
                    <button type='button' className={'nav_item' + (tabParam2===0 ? ' is_active':'')} onClick={() => setTabParam2(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam2===1 ? ' is_active':'')} onClick={() => setTabParam2(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam2===2 ? ' is_active':'')} onClick={() => setTabParam2(2)}>Tab 3</button>
                </Nav>
                <Nav className='style2' scroll>
                    <button type='button' className={'nav_item' + (tabParam3===0 ? ' is_active':'')} onClick={() => setTabParam3(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam3===1 ? ' is_active':'')} onClick={() => setTabParam3(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam3===2 ? ' is_active':'')} onClick={() => setTabParam3(2)}>Tab 3</button>
                    <button type='button' className={'nav_item' + (tabParam3===3 ? ' is_active':'')} onClick={() => setTabParam3(3)}>Tab 4</button>
                    <button type='button' className={'nav_item' + (tabParam3===4 ? ' is_active':'')} onClick={() => setTabParam3(4)}>Tab 5</button>
                    <button type='button' className={'nav_item' + (tabParam3===5 ? ' is_active':'')} onClick={() => setTabParam3(5)}>Tab 6</button>
                    <button type='button' className={'nav_item' + (tabParam3===6 ? ' is_active':'')} onClick={() => setTabParam3(6)}>Tab 7</button>
                    <button type='button' className={'nav_item' + (tabParam3===7 ? ' is_active':'')} onClick={() => setTabParam3(7)}>Tab 8</button>
                </Nav>
                <Nav className='style2 wide'>
                    <button type='button' className={'nav_item' + (tabParam4===0 ? ' is_active':'')} onClick={() => setTabParam4(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam4===1 ? ' is_active':'')} onClick={() => setTabParam4(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam4===2 ? ' is_active':'')} onClick={() => setTabParam4(2)}>Tab 3</button>
                </Nav>
                <div className='nav_panels'>
                    { tabParam4===0 &&
                        <div className='nav_panel'>Tab 1 Content</div>
                    }
                    { tabParam4===1 &&
                        <div className='nav_panel'>Tab 2 Content</div>
                    }
                    { tabParam4===2 &&
                        <div className='nav_panel'>Tab 3 Content</div>
                    }
                </div>
            </div>
            <h3 className='g_h3'>Style3</h3>
            <div className='preview'>
                <Nav className='style3' scroll>
                    <button type='button' className={'nav_item' + (tabParam5===0 ? ' is_active':'')} onClick={() => setTabParam5(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam5===1 ? ' is_active':'')} onClick={() => setTabParam5(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam5===2 ? ' is_active':'')} onClick={() => setTabParam5(2)}>Tab 3</button>
                    <button type='button' className={'nav_item' + (tabParam5===3 ? ' is_active':'')} onClick={() => setTabParam5(3)}>Tab 4</button>
                    <button type='button' className={'nav_item' + (tabParam5===4 ? ' is_active':'')} onClick={() => setTabParam5(4)}>Tab 5</button>
                    <button type='button' className={'nav_item' + (tabParam5===5 ? ' is_active':'')} onClick={() => setTabParam5(5)}>Tab 6</button>
                    <button type='button' className={'nav_item' + (tabParam5===6 ? ' is_active':'')} onClick={() => setTabParam5(6)}>Tab 7</button>
                    <button type='button' className={'nav_item' + (tabParam5===7 ? ' is_active':'')} onClick={() => setTabParam5(7)}>Tab 8</button>
                </Nav>
                <Nav className='style3'>
                    <button type='button' className={'nav_item' + (tabParam6===0 ? ' is_active':'')} onClick={() => setTabParam6(0)}>Tab 1</button>
                    <button type='button' className={'nav_item' + (tabParam6===1 ? ' is_active':'')} onClick={() => setTabParam6(1)}>Tab 2</button>
                    <button type='button' className={'nav_item' + (tabParam6===2 ? ' is_active':'')} onClick={() => setTabParam6(2)}>Tab 3</button>
                </Nav>
                <div className='nav_panels'>
                    { tabParam6===0 &&
                        <div className='nav_panel'>Tab 1 Content</div>
                    }
                    { tabParam6===1 &&
                        <div className='nav_panel'>Tab 2 Content</div>
                    }
                    { tabParam6===2 &&
                        <div className='nav_panel'>Tab 3 Content</div>
                    }
                </div>
            </div>
        </section>
    )
}
export default TabPage
