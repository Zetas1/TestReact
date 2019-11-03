import React, {useState, useEffect} from 'react';

import {
	StyledLightingImageView,
	StyledSwitchImage,
	StyledSwitchImageBlock,
	StyledImageBlock
} from './styles';

export const LightingImageView = ({views = []}) => {
	const [currentViewIndex, setCurrentViewIndex] = useState(0);

	useEffect(() => {
		setCurrentViewIndex(0);
	}, [views]);

	return (
		<StyledLightingImageView>
			<StyledImageBlock>
				<img src={views[currentViewIndex]}/>

				<StyledSwitchImageBlock>
					{
						views.map((view, index) => (
							<StyledSwitchImage
								key={index}
								isSelected={index === currentViewIndex}
								onClick={() => setCurrentViewIndex(index)}
							/>
						))
					}
				</StyledSwitchImageBlock>
			</StyledImageBlock>
		</StyledLightingImageView>
	);
};
