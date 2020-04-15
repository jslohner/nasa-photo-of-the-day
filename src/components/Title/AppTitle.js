import React from 'react';
import './Title.css';

const AppTitle = () => {
	return (
		<div className='title-container'>
			<h1 className='nasa'>
				<a href='https://www.nasa.gov/'>NASA</a>
			</h1>
			<h2 className='apod'>Astronomy Photo Of The Day</h2>
		</div>
	);
}

export default AppTitle;
