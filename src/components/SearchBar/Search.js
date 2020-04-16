import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

	const searchHandler = event => {
		props.setSearchTerm(event.target.value);
	}

	return (
		<div className='search-bar'>
			<form className='search-form'>
				<input type='text' placeholder='Search' onChange={searchHandler}/>
			</form>
		</div>
	);
}
