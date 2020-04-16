import React, { useState, useEffect } from 'react';
import AppStyle from './AppStyle.jsx';
import axios from 'axios';
import AppTitle from './components/Title/AppTitle.js';
import PhotoSection from './components/PhotoSection/PhotoSectionContainer.js';
import Explanation from './components/Explanation/ExplanationTextContainer.js';
import Search from './components/SearchBar/Search.js';

function App() {

	const [photoData, setPhotoData] = useState(null);
	const [links, setLinks] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	//
	// useEffect(() => {
	// 	axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
	// 	.then(res => {
	// 		setPhotoData(res.data);
	// 	})
	// 	.catch(err => {
	// 		console.log('error');
	// 	})
	// }, []);

	// if(!photoData) {
	// 	return (
	// 		<h3>Data Loading</h3>
	// 	);
	// }

	return (
	<AppStyle>
		<AppTitle />
		{/* <PhotoSection photoData={photoData}/> */}
		{/* <Explanation photoData={photoData}/> */}
		<Search links={links} setLinks={setLinks} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
	</AppStyle>
	);
}

export default App;
