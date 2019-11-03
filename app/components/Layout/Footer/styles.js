import styled from 'styled-components';

export const StyledFooter = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 70px;
`;

export const StyledFooterStep = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	flex-grow: 1;
	height: 100%;
	background-color: ${({isSelected}) => (isSelected ? '#00bfff' : '#f1f1f1')};
	color: ${({isSelected}) => (isSelected ? '#fff' : '#111')};
	border-right: 2px solid #e4e6e9;
	border-bottom: 3px solid #00bfff;
	list-style-type: none;
	cursor: pointer;
	
	${({isSelected}) => (isSelected && `
		& ~ li {
			border-bottom-color: #fa5a5b;
		}
	`)}
`;
