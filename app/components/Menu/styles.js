import styled from 'styled-components';

export const StyledMenuButton = styled.div`
	position: relative;
	top: 15px;
	right: 41px;
	width: 40px;
	height: 40px;
	background-color: #1a1a1a;
	cursor: pointer;
`;

export const StyledMenuLines = styled.div`
	position: absolute;
	top: 20px;
	right: 0;
	width: 20px;
	height: 2px;
	transform: translate(-50%, -50%);
	background: ${({isShown}) => (!isShown ? `#fff` : `transparent`)};
	transition: transform 100ms linear;
	
	&:before,
	&:after {
		position: absolute;
		width: 20px;
		height: 2px;
		background-color: #fff;
		content: '';
	}
	
	&:before {
		top: ${({isShown}) => (isShown ? 0 : `-6px`)};
		transform: ${({isShown}) => (isShown ? `rotate(45deg)` : `none` )};
	}
	
	&:after {
		top: ${({isShown}) => (isShown ? 0 : `6px`)};
		transform: ${({isShown}) => (isShown ? `rotate(-45deg)` : `none`)};
	}
`;

export const StyledMenuList = styled.div`
	position: fixed;
	display: flex;
	flex-flow: column;
	z-index: 3;
	right: 0;
	top: 70px;
	transition: width 200ms ease;
	width: ${({isShown}) => (isShown ? '400px' : '0')};
	height: 100%;
	background-color: #212121;
	overflow: hidden;
`;

export const StyledMenuItem = styled.div`
	text-align: center;
	line-height: 37px;
	font-size: 20px;
	width: 100%;
	height: 77px;
	padding-top: 20px;
	border-bottom: 2px solid #3c3c3c;
	color: #fff;
	cursor: pointer;
	
	&:hover {
		background-color: #3c3c3c;
	}
`;