import React from 'react';
import PhotoStyle from './PhotoSectionStyleFiles/PhotoStyle.jsx';

export default function Photo(props) {

	const buttonHandler = () => {
		if(!props.photoButton) {
			props.setPhoto(props.hdurl);
			props.setPhotoButton(true);
		}
		else {
			props.setPhoto(props.url);
			props.setPhotoButton(false);
		}
	}

	return (
		<PhotoStyle>
			<img src={props.photo} alt='see explanation for the NASA APOD'/>
			<div>
				<button onClick={buttonHandler}>High Resolution Picture</button>
				<button onClick={buttonHandler}>Low Resolution Picture</button>
			</div>
		</PhotoStyle>
	);
}
