import styled from 'styled-components';

export const StyledLightingImageView = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 52%;
	padding: 40px;
	border-right: 2px solid #e4e6e9;
	background-color: #f1f1f1;
`;

export const StyledSwitchImage = styled.div`
	width: 10px;
	height: 10px;
	background: ${({isSelected}) => (!isSelected ? `rgba(255,245,215,0)` : `#fff`)};
	border: 1px solid #fff;
	cursor: pointer;
`;

export const StyledSwitchImageBlock = styled.div`
	align-self: center;
	position: absolute;
	bottom: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 95px;
	height: 15px;
`;

export const StyledImageBlock = styled.div`
	position: relative;
	height: 481px;
	bottom: 92px;
	display: flex;
	justify-content: center;
	border-radius: 6px;
	overflow: hidden;
	box-shadow: 5px 3px 15px #eee;
`;
