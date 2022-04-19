// React dependencies
import { useState } from 'react';

// Redux dependencies
import { useAppSelector } from '@/store/hooks';

// UI Components
import DashboardLayout from '@/layout/Dashboard.style';

// Sidebar Components
import MainMenu from '@/views/sidebar/MainMenu';
import NotebookMenu from '@/views/sidebar/NotebookMenu';
import EditorForm from '@/views/editor/EditorForm';

const Dashboard = () => {
	const [notebookId, setNotebookId] = useState('');
	const noteBooks = useAppSelector((state) => state.notebooks.notebooks);

	const foundNotebook = noteBooks.find((notebook) => notebook.localId === notebookId);

	return (
		<DashboardLayout>
			<MainMenu />
			<NotebookMenu onAddNotebookId={(localId: string) => setNotebookId(localId)} />
			<EditorForm notebook={foundNotebook} />
		</DashboardLayout>
	);
};

export default Dashboard;
