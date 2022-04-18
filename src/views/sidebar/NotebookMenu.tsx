// UI Componetn
import { AiOutlineSortAscending, AiOutlineSortDescending, AiOutlineForm } from 'react-icons/ai';
import TextField from '@/components/common/form/TextField';

import './NotebookMenu.scss';

const NotebookMenu = () => {
	return (
		<aside className='[ notebook-menu ]'>
			<nav>
				<ul className='[ notebook-menu__list ]'>
					<li>
						<AiOutlineSortAscending size={22.5} />
					</li>
					<li>
						<p className='text-xl'>All Notes</p>
					</li>
					<li>
						<AiOutlineForm size={22.5} />
					</li>
				</ul>

				<TextField
					classNameWrapperTextField='notebook-menu__wrapper-text-field'
					classNameTextField='w-full'
					label='filter-notebook'
					name='filter-notebook'
					isVisibleLabel={false}
					placeholder='Filter...'
				/>
			</nav>
		</aside>
	);
};

export default NotebookMenu;
