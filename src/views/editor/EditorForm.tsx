import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { setMarkdownTitle } from '@/components/editor/notebooks/notebook-slice';

import WrapperEditor from '@/components/wrapper/WrapperEditor';

import './EditorForm.scss';

const EditorForm = () => {
	// const title = useAppSelector((state) => state.);
	const dispatch = useAppDispatch();

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		// dispatch(setMarkdownTitle('1230219083'));
	};

	return (
		<WrapperEditor>
			<div className='[ editor-container ]'>
				<input
					type='text'
					className='editor-container__text-title'
					// value={title}
					// onChange={onChangeHandler}
					placeholder='Untitled'
				/>
			</div>
		</WrapperEditor>
	);
};

export default EditorForm;
