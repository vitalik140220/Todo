import React, { FC } from "react";

interface IInputComponentProps {
	titleText: string;
	placeholderText: string;
	state: any;
	setState: Function;
}

const InputComponent: FC<IInputComponentProps> = ({
	titleText,
	placeholderText,
	state,
	setState,
}) => {
	return (
		<div className='input'>
			<div className='input__container'>
				<div className='input__title'>{titleText}</div>
				<input
					type='text'
					className='input__input'
					placeholder={placeholderText}
					value={state}
					onChange={(event) => setState(event.target.value)}
				/>
			</div>
		</div>
	);
};

export default InputComponent;
