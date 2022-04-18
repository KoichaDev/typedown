import './MainMenu.scss';

const MainMenu = () => {
	return (
		<aside className='[ sidebar-menu ]'>
			<nav>
				<ul className='[ sidebar-menu__list ]'>
					<li>
						📝
						{/* <CgNotes style={{ color: '#4883ab' }} size={22.5} /> */}
						<p>All Notes</p>
					</li>
					<li>
						📔
						<p>Notebooks</p>
					</li>

					<li>
						🗑️
						<p>Trash</p>
					</li>
					<li>
						💡
						<p>Status</p>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default MainMenu;
