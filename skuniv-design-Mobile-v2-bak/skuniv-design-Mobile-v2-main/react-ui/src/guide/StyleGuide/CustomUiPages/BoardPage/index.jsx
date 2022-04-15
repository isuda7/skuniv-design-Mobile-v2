import React from 'react'
import { Button } from 'semantic-ui-react'
import { Board } from '../../../../components'

const BoardPage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Board</h2>
            <h3 className='g_h3'>Default</h3>
            <div className='preview'>
                <Board>
                    <div className='board_head'>board_head</div>
                    <div className='board_list'>board_list</div>
                </Board>
            </div>
            <h2 className='g_h2'>Board Head</h2>
            <div className='preview'>
                <Board>
                    <div className='board_head'>
                        <div className='board_count'>
                            <span className='total'>총</span>
                            <em className='count'>0</em>
                            <span className='unit'>개</span>
                        </div>
                    </div>
                    <div className='board_head'>
                        <div className='board_count'>
                            <span className='total'>총</span>
                            <em className='count'>11</em>
                            <span className='unit'>개</span>
                        </div>
                        <div className='board_util'>
                            <Button type='button' icon className='filter'><span className='blind'>Filter View</span></Button>
                        </div>
                    </div>
                    <div className='board_head'>
                        <div className='board_count'>
                            <span className='total'>총</span>
                            <em className='count'>11</em>
                            <span className='unit'>개</span>
                        </div>
                        <div className='board_util'>
                            <Button type='button' icon className='filter'><span className='blind'>Filter View</span></Button>
                            <Button type='button' icon className='playlistAdd'><span className='blind'>Playlist Add</span></Button>
                        </div>
                    </div>
                </Board>
            </div>
        </section>
    )
}

export default BoardPage
