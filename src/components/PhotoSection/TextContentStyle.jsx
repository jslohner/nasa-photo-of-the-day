import styled from 'styled-components';

const TextContentStyle = styled.div`
	display: flex;
	justify-content: space-evenly;
	border: 1px solid black;
	margin: 0 auto;
	width: 80%;

	div {
		padding: 1%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: ${p => p.color ? p.color : 'inherit'};
		width: ${p => p.width ? p.width + '%' : 'inherit'};
		flex-direction: ${p => p.flexDirection ? p.flexDirection : 'inherit'};
	}
`

export default TextContentStyle;
