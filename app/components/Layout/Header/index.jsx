import React from 'react';

import {
	StyledHeader,
	StyledLogo,
	StyledBasket,
	StyledCounter,
	StyledControls
} from './styles';
import {Menu} from '../../Menu';

export const Header = () => {

	return (
		<StyledHeader>
			<StyledLogo>
				<img width={'100%'} src={'/src/logo.png'} />
			</StyledLogo>

			<StyledControls>
				<StyledBasket>
					<StyledCounter>
						1
					</StyledCounter>

					<img src={'/src/basket.png'}/>
				</StyledBasket>

				<Menu />
			</StyledControls>
		</StyledHeader>
	);
};
