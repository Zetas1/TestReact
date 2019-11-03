import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
	*, *:after, *:before {
		box-sizing: border-box;
	}

	html, body {
		padding: 0;
		margin: 0;
		height: 100%;
	}

	body {
		font-family: serif;
		font-size: 16px;
	}
`;
