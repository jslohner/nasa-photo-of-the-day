import React from 'react';
import './PhotoSection.css';

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
		<div className='photo-section'>
			<img className='photo' src={props.photo} alt='see explanation for the NASA APOD'/>
			<div className='picture-buttons'>
				<button onClick={buttonHandler} className='button'>High Resolution Picture</button>
				<button onClick={buttonHandler} className='button'>Low Resolution Picture</button>
			</div>
		</div>
	);
}
