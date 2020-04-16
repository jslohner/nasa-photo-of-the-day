import React from 'react';
import './PhotoSection.css';

export default function PhotoText(props) {
	return (
		<div className='photo-text-section-container'>
			<div className='photo-title-container'>
				<h2 className='photo-title'>Photo Title - {props.title}</h2>
			</div>
			<div className='photo-text-container'>
				<h3 className='copyright'>Copyright - {props.copyright}</h3>
				<h3 className='date'>Date - {props.date}</h3>
			</div>
		</div>
	);
}
