import WrapperEditor from '@/components/wrapper/WrapperEditor';

import './EditorForm.scss';

const EditorForm = () => {
	return (
		<WrapperEditor>
			<div className='[ editor-container ]'>
				<input type='text' className='editor-container__text-title' placeholder='Untitled' />
			</div>
		</WrapperEditor>
	);
};

export default EditorForm;
