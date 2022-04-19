import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { setMarkdownTitle } from '@/components/editor/notebooks/notebook-slice';

import WrapperEditor from '@/components/wrapper/WrapperEditor';

import './EditorForm.scss';

type EditorFormProps = {
	notebook: any;
};

const EditorForm = (props: EditorFormProps) => {
	const { notebook } = props;
	const { title } = notebook ?? {};
	const [enteredTitle, setEnteredTitle] = useState(title);

	useEffect(() => setEnteredTitle(title), [title]);

	const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredTitle(e.target.value);
	};

	return (
		<WrapperEditor>
			<div className='[ editor-container ]'>
				<input
					type='text'
					className='editor-container__text-title'
					value={enteredTitle}
					onChange={onChangeTitleHandler}
					placeholder='Untitled'
				/>
			</div>
		</WrapperEditor>
	);
};

export default EditorForm;
