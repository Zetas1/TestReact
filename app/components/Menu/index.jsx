import React, {useState} from 'react';

import {StyledMenuButton, StyledMenuLines, StyledMenuList, StyledMenuItem} from './styles';

export const Menu = () => {
	const [isShown, setIsShown] = useState(false);

	return (
		<div>
			<StyledMenuButton
				onClick={() => setIsShown(!isShown)}
			>

				<StyledMenuLines
					isShown={isShown}
				/>
			</StyledMenuButton>

			<StyledMenuList isShown={isShown}>
				<StyledMenuItem>
					Обучающие Видео
				</StyledMenuItem>
				<StyledMenuItem>
					Оформление заказа
				</StyledMenuItem>
				<StyledMenuItem>
					Оплата
				</StyledMenuItem>
				<StyledMenuItem>
					Доставка
				</StyledMenuItem>
				<StyledMenuItem>
					Гарантия
				</StyledMenuItem>
				<StyledMenuItem>
					Возврат
				</StyledMenuItem>
				<StyledMenuItem>
					Контакты
				</StyledMenuItem>
				<StyledMenuItem>
					Партнерам
				</StyledMenuItem>
			</StyledMenuList>

		</div>
	);
};