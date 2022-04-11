import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Input, TextArea } from "semantic-ui-react";
import { InputClear } from '../../../../components';

const FormPage = () => {
    return (
        <section className='g_sec'>
            {/* Form Layout */}
            <h2 className='g_h2'>Feildset</h2>
            <div className='preview'>
                <Form>
                    <Form.Field>
                        <label htmlFor='formName'>First Name</label>
                        <Input id='formName' placeholder='First Name' className='basic' />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor='formName2'>Last Name</label>
                        <Input id='formName2' placeholder='Last Name' className='basic' />
                    </Form.Field>
                    <Form.Field>
                        <div class="ui checkbox basic">
                            <input type="checkbox" name='checkbox0' id='checkbox01' tabindex='0' className="hidden" />
                            <label for='checkbox01'><span>Make my profile visible</span></label>
                        </div>
                    </Form.Field>
                    <Button type='submit' className='primary'>Submit</Button>
                </Form>
            </div>

            {/* Input */}
            <h2 className='g_h2'>Input</h2>
            <h3 className='g_h3'>Basic</h3>
            <div className='preview'>
                <Input placeholder='Placeholder' className='basic' />
                <br />
                <Input placeholder='Placeholder' value='Value' className='basic' />
                <br />
                <Input placeholder='Placeholder' className='basic' disabled />
            </div>
            <h3 className='g_h3'>Input Clear</h3>
            <div className='preview'>
                <InputClear placeholder='placeholder clear' value='valued' />
                <InputClear placeholder='placeholder clear' />
                <InputClear placeholder='placeholder search' search />
            </div>
            <h3 className='g_h3'>Date Picker</h3>
            <div className='preview'>
                Date Picker
            </div>

            {/* Textarea */}
            <h2 className='g_h2'>Textarea</h2>
            <h3 className='g_h3'>Basic</h3>
            <div className='preview'>
                <TextArea placeholder='Placeholder' className='basic' rows='2' />
                <br />
                <TextArea placeholder='Placeholder' value='Value' rows='2' className='basic' />
                <br />
                <TextArea placeholder='Placeholder' rows='2' className='basic' disabled />
            </div>

            {/* Select */}
            <h2 className='g_h2'>Select</h2>
            <div className='preview'>
                <p className='g_desc'>기본으로 버튼만 제공한다.</p>
                <Button type='button' className='select'>Placeholder</Button>
                <Button type='button' className='select is_valued'>Valueed</Button>
                <Button type='button' className='select is_disabled' disabled>Placeholder Disabled</Button>
                <Button type='button' className='select is_valued' disabled>Valueed Disabled</Button>
                <p className='g_desc'>Bottomsheet Page 참고</p>
                <p><Link to='/guide/Modals' className='g_link'>/guide/Modals</Link> 가이드 참조한다.</p>
            </div>

            {/* Checkbox */}
            <h2 className='g_h2'>Checkbox</h2>
            <h3 className='g_h3'>Basic</h3>
            <div className='preview'>
                <div class="ui checkbox basic">
                    <input type="checkbox" name='checkbox1' id='checkbox11' tabindex='0' className="hidden" />
                    <label for='checkbox11'><span>Make my profile visible</span></label>
                </div>
                <br />
                <div class="ui checkbox basic">
                    <input type="checkbox" name='checkbox1' id='checkbox12' tabindex='0' className="hidden" />
                    <label for='checkbox12'><span>Make my profile visible</span></label>
                </div>
                <br />
                <div class="ui checkbox basic">
                    <input type="checkbox" name='checkbox1' id='checkbox13' tabindex='0' className="hidden" />
                    <label for='checkbox13'><span>Make my profile visible</span></label>
                </div>
            </div>

            {/* Radio */}
            <h2 className='g_h2'>Radio</h2>
            <h3 className='g_h3'>Basic</h3>
            <div className='preview'>
                <div class="ui radio basic">
                    <input type='radio' name='radio1' id='radio11' tabindex='0' className="hidden" />
                    <label for='radio11'><span>Make my profile visible</span></label>
                </div>
                <br />
                <div class="ui radio basic">
                    <input type='radio' name='radio1' id='radio12' tabindex='0' className="hidden" />
                    <label for='radio12'><span>Make my profile visible</span></label>
                </div>
                <br />
                <div class="ui radio basic">
                    <input type='radio' name='radio1' id='radio13' tabindex='0' className="hidden" />
                    <label for='radio13'><span>Make my profile visible</span></label>
                </div>
            </div>

            {/* Toggle */}
            <h2 className='g_h2'>Toggle</h2>
            <h3 className='g_h3'>Basic</h3>
            <div className='preview'>
                <div class="ui toggle basic">
                    <input type='checkbox' name='toggle1' id='toggle1' tabindex='0' className='hidden'/>
                    <label for='toggle1'><span className='blind'>Toggle</span></label>
                </div>
            </div>
        </section>
    )
}

export default FormPage
