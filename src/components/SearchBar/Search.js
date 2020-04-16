import React, { useEffect } from 'react';
import SearchBarStyle from './SearchBarStyle.jsx';
import axios from 'axios';

export default function SearchBar(props) {

	useEffect(() => {
		axios.get('https://cors-anywhere.herokuapp.com/https://apod.nasa.gov/apod/archivepix.html')
			.then(res => {
				let linkData = {};
				let nasaLink = 'https://apod.nasa.gov/apod';
				let data = res.data;
				let dataDoc = new DOMParser().parseFromString(data, 'text/html');
				let linkTextString = dataDoc.querySelectorAll('b')[1].textContent;
				let linkTextContent = linkTextString.split(/[\n]/g);
				let anchors = dataDoc.querySelectorAll('b')[1].querySelectorAll('a');
				let anchorArr = Array.from(anchors);
				let pathNames = anchorArr.map(anchor => anchor.pathname);
				let hrefs = pathNames.map(path => `${nasaLink}${path}`);
				let filteredLinkTextContent = linkTextContent.filter(linkText => linkText !== '');
				filteredLinkTextContent.forEach((linkText, index) => {
					linkData[linkText] = hrefs[index];
				})
				props.setLinks(linkData);
			})
			.catch(err => {
				console.log('error');
			})
	}, [])

	const changeHandler = event => {
		props.setSearchTerm(event.target.value);
	}

	const submitHandler = event => {
		Object.keys(props.links).forEach(linkText => {
			if(linkText.toString().includes(props.searchTerm)) {
				console.log(props.links[linkText]);
			}
		})
		event.preventDefault();
	}

	if(!props.links) {
		return (
			<h3>Data Loading</h3>
		);
	}

	return (
		<SearchBarStyle>
			<form onSubmit={submitHandler}>
				<input type='text' placeholder='Search' onChange={changeHandler}/>
			</form>
		</SearchBarStyle>
	);
}
