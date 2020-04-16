import React, { useState } from 'react';
import './PhotoSection.css';
import Photo from './Photo.js';
import PhotoText from './PhotoTextContent.js';

export default function PhotoSection(props) {

	const [photo, setPhoto] = useState(props.photoData.url);
	const [photoButton, setPhotoButton] = useState(false);
	const [title, setTitle] = useState(props.photoData.title);
	const [copyright, setCopyright] = useState(props.photoData.copyright);
	const [date, setDate] = useState(props.photoData.date);

	return (
		<div className='photo-section-container'>
			<Photo photo={photo} setPhoto={setPhoto} photoButton={photoButton} setPhotoButton={setPhotoButton} hdurl={props.photoData.hdurl} url={props.photoData.url}/>
			<PhotoText title={title} setTitle={setTitle} copyright={copyright} setCopyright={setCopyright} date={date} setDate={setDate}/>
		</div>
	);
}
