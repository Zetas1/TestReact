import styled from 'styled-components';

export const StyledLightingInfo = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: calc(100% - 70px);
	background: #f1f1f1;
`;

export const StyledTextBlock = styled.div`
	width: 62%;
	padding-left: 30px;
`;

export const StyledBackButton = styled.div`
	padding: 30px 0 5px 30px;
	color: #ccc;
	cursor: pointer;
	
	&:hover {
		color: #989898;
	}
`;