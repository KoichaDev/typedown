// React dependency
import { AiFillFilter } from 'react-icons/ai';

// Types
import { TextFieldProps } from './TextField.types';

// UI Component
import WrapperTextField from '@/components/wrapper/WrapperTextField';

const TextField = (props: TextFieldProps) => {
	const {
		classNameFormControl,
		classNameLabel,
		classNameWrapperTextField,
		classNameTextField,
		label,
		isTextFocus = false,
		isVisibleLabel = true,
		setIsClickedField,
		iconVisible = true,
		name,
		...rest
	} = props;

	return (
		<WrapperTextField
			iconVisible={iconVisible}
			isTextFocus={isTextFocus}
			className={classNameFormControl}>
			<label htmlFor={name} className={classNameLabel}>
				{isVisibleLabel && <span>{label}</span>}
			</label>
			<div className={classNameWrapperTextField}>
				<AiFillFilter size={18.5} />
				<input type='text' id={name} className={classNameTextField} {...rest} />
			</div>
		</WrapperTextField>
	);
};

export default TextField;
