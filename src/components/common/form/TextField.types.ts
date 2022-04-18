export type TextFieldProps = {
	classNameFormControl?: string;
	classNameField?: string;
	classNameLabel?: string;
	classNameWrapperTextField?: string;
	classNameTextField?: string;
	isVisibleLabel?: boolean;
	iconVisible?: boolean;
	label: string;
	name: string;
} & React.HTMLProps<HTMLInputElement>;
