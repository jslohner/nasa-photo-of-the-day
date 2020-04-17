import React from 'react';
import ExplanationStyle from './ExplanationStyle.jsx';

export default function Explanation(props) {
	return (
		<ExplanationStyle>
			<h3>Explanation</h3>
			<p>{props.photoData.explanation}</p>
		</ExplanationStyle>
	);
}
