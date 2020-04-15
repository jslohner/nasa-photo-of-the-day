import React from 'react';

export default function Explanation(props) {
	return (
		<div className='explanation-container'>
			<p className='explanation-text'>{props.photoData.explanation}</p>
		</div>
	);
}
