import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// PageList
import PageList from './guide/PageList';
import PageListGuide from './guide/PageList/indexGuide';
import PageListHistory from './guide/PageList/indexHistory';

// Guide Semantic UI
import GuideAll from './guide/StyleGuide';
import DefaultPage from './guide/StyleGuide/Pages/DefaultPage';
import ElementPageGroup from './guide/StyleGuide/Pages/ElementPageGroup';
import SectionPage from './guide/StyleGuide/Pages/SectionPage';
import FormPage from './guide/StyleGuide/Pages/FormPage';
import TablePage from './guide/StyleGuide/Pages/TablePage';
import ListPage from './guide/StyleGuide/Pages/ListPage';
import ProgressPage from './guide/StyleGuide/Pages/ProgressPage';
import TabPage from './guide/StyleGuide/Pages/TabPage';
import TabPage2 from './guide/StyleGuide/Pages/TabPage';
import AccordionPage from './guide/StyleGuide/Pages/AccordionPage';
import DragDropPage from './guide/StyleGuide/Pages/DragDropPage';
import ModalPage from './guide/StyleGuide/Pages/ModalPage';
import EtcPageGroup from './guide/StyleGuide/Pages/EtcPageGroup';

// Guide Librarys UI
import SwipePage from './guide/StyleGuide/LibraryPages/SwipePage';

// Guide Custom UI
import CustomUiPages from './guide/StyleGuide/CustomUiPages';
import AppbarPage from './guide/StyleGuide/CustomUiPages/AppbarPage';
import InputClearPage from './guide/StyleGuide/CustomUiPages/InputClearPage';
import NodataPage from './guide/StyleGuide/CustomUiPages/NodataPage';
import PiePage from './guide/StyleGuide/CustomUiPages/PiePage';
import ResultDataPage from './guide/StyleGuide/CustomUiPages/ResultDataPage';
import ThumbPage from './guide/StyleGuide/CustomUiPages/ThumbPage';
import CardPage from './guide/StyleGuide/CustomUiPages/CardPage';
import BoardPage from './guide/StyleGuide/CustomUiPages/BoardPage';
import BoardItemPage from './guide/StyleGuide/CustomUiPages/BoardItemPage';

// Guide Templates
import TempMain from './guide/Prototype/TempMain';
import TempSubmain from './guide/Prototype/TempSubmain';
import Template01 from './guide/Prototype/Template01';
import Template02 from './guide/Prototype/Template02';
import Template03 from './guide/Prototype/Template03';
import Template04 from './guide/Prototype/Template04';
import TempFullPopup from './guide/Prototype/TempFullPopup';
import TempBottomsheet from './guide/Prototype/TempBottomsheet';

// Layout
import LayoutGuide from './layouts/LayoutGuide';
import LayoutSub from './layouts/LayoutSub/';
import LayoutMain from './layouts/LayoutMain/';

// Myhome
import Main from './views/Myhome/Main/';

// 학습창
import LearningOverview from './views/Learning/LearningOverview'
import LearningOverviewTeacherIntroduce from './views/Learning/LearningOverviewTeacherIntroduce'
import LearningOverviewTeacherLecture from './views/Learning/LearningOverviewTeacherLecture'
import LearningContent from './views/Learning/LearningContent'

// Sub
// import Sample from './views/Sample/';

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                {/* Pagelist */}
                <Route path='/'>
                    <Route index element={<PageList />} />
                    <Route path='/Pagelist/indexGuide' element={<PageListGuide />} />
                    <Route path='/Pagelist/indexHistory' element={<PageListHistory />} />
                </Route>

                {/* Guide */}
                <Route path='/' element={<LayoutGuide />}>
                    {/* Semantic UI */}
                    <Route path='/guide/GuideAll' element={<GuideAll />} />
                    <Route path='/guide/DefaultPage' element={<DefaultPage />} />
                    <Route path='/guide/ElementPageGroup' element={<ElementPageGroup />} />
                    <Route path='/guide/SectionPage' element={<SectionPage />} />
                    <Route path='/guide/FormPage' element={<FormPage />} />
                    <Route path='/guide/TablePage' element={<TablePage />} />
                    <Route path='/guide/ListsPage' element={<ListPage />} />
                    <Route path='/guide/ProgressPage' element={<ProgressPage />} />
                    <Route path='/guide/TabPage' element={<TabPage />} />
                    <Route path='/guide/TabPage2' element={<TabPage2 />} />
                    <Route path='/guide/AccordionPage' element={<AccordionPage />} />
                    <Route path='/guide/DragDropPage' element={<DragDropPage />} />
                    <Route path='/guide/ModalPage' element={<ModalPage />} />
                    <Route path='/guide/EtcPageGroup' element={<EtcPageGroup />} />

                    {/* Librarys UI */}
                    <Route path='/guide/SwipePage' element={<SwipePage />} />

                    {/* Custom UI */}
                    <Route path='/guide/CustomUiPages' element={<CustomUiPages />} />
                    <Route path='/guide/AppbarPage' element={<AppbarPage />} />
                    <Route path='/guide/InputClearPage' element={<InputClearPage />} />
                    <Route path='/guide/NodataPage' element={<NodataPage />} />
                    <Route path='/guide/PiePage' element={<PiePage />} />
                    <Route path='/guide/ResultDataPage' element={<ResultDataPage />} />
                    <Route path='/guide/ThumbPage' element={<ThumbPage />} />
                    <Route path='/guide/BoardPage' element={<BoardPage />} />
                    <Route path='/guide/BoardItemPage' element={<BoardItemPage />} />
                    <Route path='/guide/CardPage' element={<CardPage />} />
                </Route>

                {/* Main */}
                <Route path='/' element={<LayoutMain />}>
                    <Route path='/Myhome/Main' element={<Main />} />
                </Route>

                {/* Sub */}
                <Route path='/' element={<LayoutSub />}>
                    {/* Prototype */}
                    <Route path='/guide/Prototype/TempMain' element={<TempMain />} />
                    <Route path='/guide/Prototype/TempSubmain' element={<TempSubmain />} />
                    <Route path='/guide/Prototype/Template01' element={<Template01 />} />
                    <Route path='/guide/Prototype/Template02' element={<Template02 />} />
                    <Route path='/guide/Prototype/Template03' element={<Template03 />} />
                    <Route path='/guide/Prototype/Template04' element={<Template04 />} />
                    <Route path='/guide/Prototype/TempFullPopup' element={<TempFullPopup />} />
                    <Route path='/guide/Prototype/TempBottomsheet' element={<TempBottomsheet />} />

                    {/* Learning */}
                    <Route path='/Learning/LearningContent' element={<LearningContent />} />
                    <Route path='/Learning/LearningOverview' element={<LearningOverview />} />
                    <Route path='/Learning/LearningOverviewTeacherIntroduce' element={<LearningOverviewTeacherIntroduce />} />
                    <Route path='/Learning/LearningOverviewTeacherLecture' element={<LearningOverviewTeacherLecture />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default Router;
