import styled from '@emotion/styled';

const DashboardLayout = styled.main((props) => ({
	display: 'grid',
	gridTemplateColumns: '0.40fr 0.5fr 1.1fr',
	gridTemplateAreas: '"sidebar-menu notebook-menu editor-content"',
	height: '100vh',
}));

export default DashboardLayout;
