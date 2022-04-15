import React from 'react'
import { Progress } from 'semantic-ui-react'
// import {} from "semantic-ui-react";

const ProgressPage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Progress</h2>
            <div className='preview'>
                <Progress className='style1' percent={11} />
            </div>
        </section>
    )
}

export default ProgressPage
