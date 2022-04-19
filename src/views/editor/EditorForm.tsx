import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { setMarkdownTitle } from '@/components/editor/notebooks/notebook-slice';

import WrapperEditor from '@/components/wrapper/WrapperEditor';

import './EditorForm.scss';

type EditorFormProps = {
	notebook: unknown;
};

const EditorForm = (props: EditorFormProps) => {
	const { notebook } = props;

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
