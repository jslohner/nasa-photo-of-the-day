import styled from 'styled-components';

const SearchBarStyle = styled.div`
	margin: 0 auto;
	width: 80%;
	margin-bottom: 1%;


	input{
		width: 50%;
		height: 5vh;
		font-size: 120%;
		text-align: center;
		color: white;
		background-color: darkblue;
		border: 2px solid black;
		border-radius: 10px;
		outline: none;

		::placeholder {
			color: white;
			opacity: 1;
		}
	}
`

export default SearchBarStyle;
