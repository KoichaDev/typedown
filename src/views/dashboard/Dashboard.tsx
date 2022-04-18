// UI Components
import DashboardLayout from '@/layout/Dashboard.style';

// Sidebar Components
import MainMenu from '@/views/sidebar/MainMenu';
import NotebookMenu from '@/views/sidebar/NotebookMenu';
import EditorForm from '@/views/editor/EditorForm';

const Dashboard = () => {
	return (
		<DashboardLayout>
			<MainMenu />
			<NotebookMenu />
			<EditorForm />
		</DashboardLayout>
	);
};

export default Dashboard;
