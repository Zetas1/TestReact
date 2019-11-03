import React, {useState, useEffect} from 'react';

import {StyledFooter, StyledFooterStep} from './styles';

const footerSteps = [
	'Вариант кухни',
	'Размеры',
	'Сенсор',
	'Питающий кабель',
	'Блок питания',
	'Цвет свечения',
	'Монтаж',
	'Корзина'
];

export const Footer = () => {
	const [currentStep, setCurrentStep] = useState(5);

	useEffect(() => {

	}, []);


	return (
		<StyledFooter>
			{
				footerSteps.map((step, index) => (
					<StyledFooterStep
						key={index}
						isSelected={currentStep === index}
						onClick={() => setCurrentStep(index)}
					>
						{step}
					</StyledFooterStep>
				))
			}
		</StyledFooter>
	);
};
