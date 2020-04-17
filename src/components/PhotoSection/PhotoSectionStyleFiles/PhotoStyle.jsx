import styled from 'styled-components';

const PhotoStyle = styled.div`
	display: flex;
	flex-flow: column wrap;

	img {
		margin: 0 auto;
		width: 80%;
		margin-top: 1%;
		border: 30px solid black;
	}

	div {
		display: flex;
		flex-flow: row nowrap;
		margin: 0 auto;
		width: 80%;
		justify-content: space-evenly;

		button {
			color: white;
			background-color: darkblue;
			font-size: 80%;
			height: 5vh;
			width: 100%;
			margin: 1% 0% 1%;
			outline: none;
			border-radius: 8px;
		}
	}
`

export default PhotoStyle;

// img.photo {
// 	margin: 0 auto;
// 	width: 80%;
// 	margin-top: 1%;
// 	border: 30px solid black;
// }
//
// div.photo-section {
// 	display: flex;
// 	flex-flow: column wrap;
// }
//
// div.picture-buttons {
// 	display: flex;
// 	flex-flow: row nowrap;
// 	margin: 0 auto;
// 	width: 80%;
// 	justify-content: space-evenly;
// }
//
// div.picture-buttons .button {
// 	color: white;
// 	background-color: darkblue;
// 	font-size: 80%;
// 	height: 5vh;
// 	width: 100%;
// 	margin: 1% 0% 1%;
// 	outline: none;
// 	border-radius: 8px;
// }
