import styled from 'styled-components';

export const StyledLightingDescription = styled.div`
	position: relative;
	z-index: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	width: 50%;
	background-color: #f1f1f1;
	
	table {
		padding-top: 10px;
		padding-left: 45px;
		padding-bottom: 30px;
		height: 302px;
		font-size: 17px;
	}
`;

export const StyledLightingInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 67px;
	font-size: 22px;
	background-color: #00bfff;
	color: #fff;
`;

export const StyledLightingInfoButton = styled.div`
	position: absolute;
	left: 0;
	width: 70px;
	height: 67px;
	text-align: center;
	font-weight: bold;
	font-size: 33px;
	padding-top: 17px;
	color: #fff;
	background-color: #00b4f2;
	cursor: pointer;
`;

export const StyledListImages = styled.div`
	position: relative;
	top: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 48.5%;
`;

export const StyledListImagesItem = styled.div`
	position: relative;
	top: 30px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	font-weight: bold;
	margin-right: 10px;
	width: ${({isSelected}) => (isSelected ? '140px' : '130px')};
	height: ${({isSelected}) => (isSelected ? '100px' : '90px')};
	cursor: pointer;
	color: #fff;
	
	&:after {
		content: '';
		position: absolute;
		display: ${({isSelected}) => (isSelected ? 'block' : 'none')};
		right: 15px;
		top: 5px;
		width: 20px;
		height: 20px;
		background: url(/src/checkmark.png);
	}
`;

export const StyledTitleLighting = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	width: 80px;
	height: 30px;
	background-color: #f1f1f1;
	box-shadow: 1px 5px 22px -5px rgba(0,0,0,0.5);
	cursor: pointer;
`;