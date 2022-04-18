import { useAppSelector } from '@/store/hooks';

// UI Components
import { AiOutlineSortAscending, AiOutlineSortDescending, AiOutlineForm } from 'react-icons/ai';
import TextField from '@/components/common/form/TextField';
import WrapperArticle from '@/components/wrapper/WrapperArticle';

import './NotebookMenu.scss';

const NotebookMenu = () => {
	const notebooks = useAppSelector((state) => state.notebooks.notebooks);

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
					classNameTextField='w-full text-xs'
					label='filter-notebook'
					name='filter-notebook'
					isVisibleLabel={false}
					placeholder='Filter...'
				/>
			</nav>

			<section className='[ notebook-menu__article-section-1 ]'>
				{notebooks.length > 0 &&
					notebooks.map(({ localId, title, content }) => {
						return (
							<WrapperArticle key={localId} className='flex-flow'>
								<h1 className='text-light-200 text-xs'>{title}</h1>
								<p className='text-light-200 text-xs'>{content}</p>
							</WrapperArticle>
						);
					})}
			</section>
		</aside>
	);
};

export default NotebookMenu;
