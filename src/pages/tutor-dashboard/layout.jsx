import { DashboardAppbar } from './TutorDashboard';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
	return (
		<div className='flex h-screen'>
			<Sidebar />
			<div>
				<DashboardAppbar />
				<div className='overflow-y-auto'>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
