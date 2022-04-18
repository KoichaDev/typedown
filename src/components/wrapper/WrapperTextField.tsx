import styled from '@emotion/styled';

const WrapperTextField = styled.div((props) => ({
	position: 'relative',
	svg: {
		position: 'absolute',
		top: '36%',
		left: '6%',
	},

	'input[type="text"]': {
		height: '4.5vh',
		textIndent: '1.75rem',
		borderRadius: '5px',
		outline: 'none',
	},
}));

export default WrapperTextField;
