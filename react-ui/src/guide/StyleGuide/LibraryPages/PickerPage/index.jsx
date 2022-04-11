import React from 'react'
import { DatePicker, TimePicker } from '../../../../components'

const GuidePage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Pickers</h2>
            <div className='preview'>
                <DatePicker />
                <TimePicker />
            </div>
        </section>
    )
}

export default GuidePage
