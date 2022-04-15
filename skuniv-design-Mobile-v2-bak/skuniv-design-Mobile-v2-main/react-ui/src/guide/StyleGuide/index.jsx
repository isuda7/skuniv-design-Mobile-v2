import React from 'react';

// Page
import {
    DefaultPage,
    FormPage,
    ButtonPage,
    IconPage,
    LabelPage,
    TabPage,
    AccordionPage,
    DragDropPage,
    ModalPage,
    EtcPageGroup,
    GuidePage,
} from './Pages'

const GuideAll = () => {
    return (
        <>
            {/* Convention */}
            <DefaultPage />

            {/* Forms */}
            <FormPage />

            {/* Buttons */}
            <ButtonPage />

            {/* Icons */}
            <IconPage />

            {/* Labels */}
            <LabelPage />

            {/* Tabs */}
            <TabPage />

            {/* Accodions */}
            <AccordionPage />

            {/* DragDrop */}
            <DragDropPage />

            {/* Modals */}
            <ModalPage />

            {/* EtcPageGroup */}
            <EtcPageGroup />

            {/* 복사용 */}
            <GuidePage />
        </>
    )
}


export default GuideAll