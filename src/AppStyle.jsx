import styled from 'styled-components';
// import img from './components/Assets/images/test1.jpg';

const AppStyle = styled.div`
	text-align: center;
	${'' /* background-image: url(${img}); */}

	.App-header {
		background-color: #282c34;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: white;
	}
`

export default AppStyle;
