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
	console.log(props.photoData);

	return (
		<div className='photo-section-container'>
			<Photo photo={photo} setPhoto={setPhoto} photoButton={photoButton} setPhotoButton={setPhotoButton} hdurl={props.photoData.hdurl} url={props.photoData.url}/>
			{/*<PhotoText />*/}
		</div>
	);
}

// copyright: "ScottAspinall"

// date: "2020-04-15"

// explanation: "It was an astronomical triple play. Setting on the left, just after sunset near the end of last month, was our Moon -- showing a bright crescent phase.  Setting on the right was Venus, the brightest planet in the evening sky last month -- and this month, too.  With a small telescope, you could tell that Venus' phase was half, meaning that only half of the planet, as visible from Earth, was exposed to direct sunlight and brightly lit. High above and much further in the distance was the Pleiades star cluster.  Although the Moon and Venus move with respect to the background stars, the Pleiades do not -- because they are background stars. In the beginning of this month, Venus appeared to move right in front of the Pleiades, a rare event that happens only once every eight years.  The featured image captured this cosmic triangle with a series of exposures taken from the same camera over 70 minutes near Avonlea, Saskatchewan, Canada. The positions of the celestial objects was
// predicted. The only thing unpredicted was the existence of the foreground tree -- and the astrophotographer is still unsure what type of tree that is."

// hdurl: "https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_2048.jpg"

// media_type: "image"

// service_version: "v1"

// title: "A Cosmic Triangle"

// url: "https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_960.jpg"
