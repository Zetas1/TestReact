import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/App/index';
import {StyledGlobal} from './styles';

ReactDOM.render(
	<>
		<StyledGlobal />
		<App />
	</>,
	document.getElementById('root')
);