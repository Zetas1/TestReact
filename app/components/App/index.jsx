import React from 'react';

import {Header} from '../Layout/Header';
import {Layout} from '../Layout';
import {Footer} from '../Layout/Footer';
import {Content} from '../Layout/Content';
import {Lighting} from '../Lighting';

export const App = () => {

	return (
		<Layout>
			<Header/>

			<Content>
				<Lighting/>
			</Content>

			<Footer/>
		</Layout>
	);
};