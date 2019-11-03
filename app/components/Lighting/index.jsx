import React, {useState, useEffect} from 'react';

import {StyledLighting} from './styles';
import {LightingImageView} from './LightingImageView';
import {LightingDescription} from './LightingDescription';
import {LightingInfo} from './LightingInfo';

const getLightingList = () => ([
	{
		name: 'Теплый',
		images: [
			'/src/warmLight600.jpg',
			'/src/warmLight2600.jpg',
			'/src/warmLight3600.jpg'
		],
		preview: '/src/warmLight200.jpg'
	},
	{
		name: 'Дневной',
		images: [
			'/src/dayLight600.jpg',
			'/src/dayLight2600.jpg',
			'/src/dayLight3600.jpg'
		],
		preview: '/src/dayLight200.jpg'
	},
	{
		name: 'Холодный',
		images: [
			'/src/coldLight600.jpg',
			'/src/coldLight2600.jpg',
			'/src/coldLight3600.jpg'
		],
		preview: '/src/coldLight200.jpg'
	}
]);

export const Lighting = () => {
	const [lightingList, setLightingList] = useState([]);
	const [currentLighting, setCurrentLighting] = useState({});
	const [isInfoShown, setIsInfoShown] = useState(false);

	useEffect(() => {
		const lightingList = getLightingList();
		setLightingList(lightingList);
		setCurrentLighting(lightingList[0]);
	}, []);

	return (
		<StyledLighting>
			<LightingImageView
				views={currentLighting.images}
			/>

			<LightingDescription
				setIsInfoShown={setIsInfoShown}
				chosenLightingName={currentLighting.name}
				setChosenLighting={setCurrentLighting}
				lightingList={lightingList}
			/>

			{
				isInfoShown ? (
					<LightingInfo
						hideInfo={() => setIsInfoShown(false)}
					/>
				) : null
			}
		</StyledLighting>
	);
};
