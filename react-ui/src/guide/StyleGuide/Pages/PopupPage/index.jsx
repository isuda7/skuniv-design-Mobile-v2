import React from 'react'
import {Popup, Button} from 'semantic-ui-react'

const PopupPage = () => {
    return (
        <section className='g_sec'>
            <h2 className='g_h2'>Popups</h2>
            <div className='preview'>
                <Popup
                    trigger={<Button type='button' icon='add' />}
                >
                    <Popup.Content>
                        <p>Popup Content</p>
                    </Popup.Content>
                </Popup>

                <Popup
                    on='click'
                    trigger={<Button type='button' icon='add' />}
                >
                    <Popup.Content>
                        <p>Popup Content</p>
                    </Popup.Content>
                </Popup>
            </div>
        </section>
    )
}

export default PopupPage
