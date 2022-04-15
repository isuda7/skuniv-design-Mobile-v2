import React from "react";
import CardPage from "./CardPage";
import InputClearPage from "./InputClearPage";
import NodataPage from "./NodataPage";
import PiePage from "./PiePage";
import ResultDataPage from "./ResultDataPage";
import ThumbPage from "./ThumbPage";


const CustomUiPages = () => {
	return (
		<>
			<CardPage />
			<InputClearPage />
			<NodataPage />
			<PiePage />
			<ResultDataPage />
			<ThumbPage />
		</>
	)

}

export default CustomUiPages;