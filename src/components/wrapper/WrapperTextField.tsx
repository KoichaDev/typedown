import styled from '@emotion/styled';

type WrapperTextFieldProps = {
	iconVisible?: boolean;
};

const WrapperTextField = styled.div((props: WrapperTextFieldProps) => ({
	position: 'relative',
	svg: {
		display: props.iconVisible ? 'block' : 'none',
		position: 'absolute',
		top: '36%',
		left: '6%',
	},

	'input[type="text"]': {
		height: '4vh',
		textIndent: props.iconVisible ? '1.75rem' : '0rem',
		borderRadius: '5px',
		border: 'none',
	},
}));

export default WrapperTextField;
