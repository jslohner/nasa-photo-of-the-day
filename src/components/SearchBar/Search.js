import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
	return (
		<div className='search-bar'>
			<form className="search-form">
				<input type="text" placeholder="Search"/>
			</form>
		</div>
	);
}
