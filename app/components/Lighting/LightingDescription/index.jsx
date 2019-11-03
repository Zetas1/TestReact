import React from 'react';

import {
	StyledLightingDescription,
	StyledLightingInfo,
	StyledLightingInfoButton,
	StyledListImagesItem,
	StyledListImages,
	StyledTitleLighting
} from './styles';

export const LightingDescription = ({
		setChosenLighting,
		chosenLightingName,
		lightingList,
		setIsInfoShown
	}) => {

	return (
		<StyledLightingDescription>
			<table>
				<tbody>
				<tr>
					<td>Класс:</td>
					<td>
						<StyledTitleLighting>
							Standart
						</StyledTitleLighting>
					</td>
				</tr>
				<tr>
					<td>Потребляемая <br/> мощность:</td>
					<td>59Bт.</td>
				</tr>
				<tr>
					<td>Сила света:</td>
					<td>
						3459 Люмен = 7,5 ламп <br/> накаливания по 40 Вт.
					</td>
				</tr>
				<tr>
					<td>Гарантия:</td>
					<td>3 года</td>
				</tr>
				<tr>
					<td>Монтаж:</td>
					<td>Да</td>
				</tr>
				<tr>
					<td>Итого сумма:</td>
					<td>2594 рублей</td>
				</tr>
				</tbody>
			</table>
			<StyledLightingInfo>
				<StyledLightingInfoButton
					onClick={() => setIsInfoShown(true)}
				>
					i
				</StyledLightingInfoButton>
				Выберите цвет свечения
			</StyledLightingInfo>

			<StyledListImages>
				{
					lightingList.map((lighting, index) => (
						<StyledListImagesItem
							key={index}
							onClick={() => setChosenLighting(lighting)}
							isSelected={chosenLightingName === lighting.name}
							style={{background: `url(${lighting.preview})`}}
						>
							{lighting.name}
						</StyledListImagesItem>
					))
				}
			</StyledListImages>
		</StyledLightingDescription>
	);
};
