import styled from 'styled-components';

const AppTitleStyle = styled.div`
	color: white;
	background-color: darkblue;
	width: 100%;
	padding: 1%;
	margin: 0 auto;
	margin-top: 1%;

	h1 {
		margin-top: 1%;
	}

	h2 {
		margin-top: 2%;
	}

	a {
		font-size: 60px;
		color: white;
		text-decoration: none;
		font-size: 100px;
		padding: 1.5%;
		border-radius: 15px;

		&:hover {
			color: darkblue;
			background-color: white;
		}
	}
`

export default AppTitleStyle;
