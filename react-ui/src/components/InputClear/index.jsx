import React, {useState, useRef} from 'react'
import {Button, Input} from "semantic-ui-react";
import './style.scss';

const InputClear = (props) => {
    const [focus, setFocus] = useState(false);
    const [write, setWrite] = useState(() => (typeof props.value==='string' && props.value.length > 0) ? props.value : '');
    const inputSrch = useRef();

    const handlerClear = (e) => {
        setWrite('');
        inputSrch.current.focus();
    }
    return (
        <div className={'input_clear'+(focus?' is_focus':'')+(props.search?' has_search':'')}>
            <Input type='text' placeholder={props.placeholder?props.placeholder:''} value={write} ref={inputSrch}
                   onClick={() => setFocus(true)}
                   onBlur={() => setFocus(false)}
                   onChange={(e) => setWrite(e.target.value)}
                   className='basic'
            />
            {(write!=='') && <Button className='clear' onClick={handlerClear}><span className='blind_'>삭제</span></Button>}
            {props.search && <Button className='search'><span className='blind_'>검색</span></Button>}
        </div>
    )
}
export default InputClear
