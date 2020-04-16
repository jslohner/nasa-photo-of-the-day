import React from 'react';
import './Explanation.css';

export default function Explanation(props) {
	return (
		<div className='explanation-container'>
			<h3 className='explanation-title'>Explanation</h3>
			<p className='explanation-text'>{props.photoData.explanation}</p>
		</div>
	);
}
