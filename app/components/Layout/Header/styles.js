import styled from 'styled-components';

export const StyledHeader = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 70px;
	background-color: #1a1a1a;
	z-index: 100;
`;

export const StyledLogo = styled.div`
	width: 100px;
	color: #fff;
	margin-left: 34px;
	margin-top: 15px;
	cursor: pointer;
`;

export const StyledControls = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	height: 100%;
	width: 50%;
`;

export const StyledBasket = styled.div`
	cursor: pointer;
	position: relative;
	top: 23px;
	right: 80px;
`;

export const StyledCounter = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 13px;
	height: 13px;
	text-align: center;
	line-height: 14px;
	font-size: 10px;
	border-radius: 50%;
	color: #fff;
	background-color: #00bfff;
`;
