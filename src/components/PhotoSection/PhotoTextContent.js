import React from 'react';
import TextContentStyle from './PhotoSectionStyleFiles/TextContentStyle.jsx';

export default function PhotoText(props) {
	return (
		<TextContentStyle>
			<div>
				<h2>Photo Title - {props.title}</h2>
			</div>
			<div style={{width: '50', flexDirection: 'column'}}>
				<h3>Copyright - {props.copyright}</h3>
				<h3>Date - {props.date}</h3>
			</div>
		</TextContentStyle>
	);
}
