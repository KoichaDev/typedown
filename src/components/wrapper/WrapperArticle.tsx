import styled from '@emotion/styled';

const WrapperArticle = styled.article((props) => ({
	padding: '1em',
	margin: '0.5em 0',
	cursor: 'pointer',

	'&:hover': {
		background: '#405064',
	},
}));

export default WrapperArticle;
