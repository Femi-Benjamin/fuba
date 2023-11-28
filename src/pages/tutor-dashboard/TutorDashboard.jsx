import { useNavigate } from 'react-router-dom';

import Layout from './layout';

const TutorDashboard = () => {
	return (
		<Layout>
			<div className='mt-12 px-12'>
				<div className='px-1 py-1 w-[100%] bg-[#280D46] h-[231px] rounded'></div>
				<div className='flex justify-between px-5 -mt-20'>
					<div className='bg-white h-[160px] border border-gray-200 w-[305px] rounded px-7 py-5'>
						<div>
							<img
								src='/ipload.svg'
								alt=''
							/>
						</div>
						<div>
							<h1 className='mt-2 font-medium text-xl'>Uploads</h1>
							<p className='text-gray-500'>Nine (9)</p>
						</div>
					</div>
					<div className='bg-white h-[160px] border border-gray-200 w-[305px] rounded px-7 py-5'>
						<div>
							<img
								src='/fubastudent.svg'
								alt=''
							/>
						</div>
						<div>
							<h1 className='mt-2 font-medium text-xl'>Active students</h1>
							<p className='text-gray-500'>Nine (5)</p>
						</div>
					</div>
					<div className='bg-white h-[160px] border border-gray-200 w-[305px] rounded px-7 py-5'>
						<div>
							<img
								src='/fubamoney.svg'
								alt=''
							/>
						</div>
						<div>
							<h1 className='mt-2 font-medium text-xl'>Total Earnings</h1>
							<p className='text-gray-500'>200k ($)</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default TutorDashboard;

export const DashboardAppbar = () => {
	const navigate = useNavigate();

	return (
		<div className='bg-white h-[123px] dashboardappbar sm:w-[900px] xl:w-[1140px] 2xl:w-[1250px] flex justify-between items-center px-5'>
			<div className=''>
				<div>
					<p className='font-semibold text-2xl'>Dashboard</p>
				</div>
			</div>
			<div>
				<button
					onClick={() => {
						navigate('/upload_course');
					}}
					className='bg-[#280D46] rounded flex items-center gap-2 px-4 py-2'>
					<div>
						<img
							src='/upload.svg'
							alt=''
						/>
					</div>
					<div>
						<p className='text-white'>Upload Course</p>
					</div>
				</button>
			</div>
			<div className='flex items-center gap-5'>
				<div className='cursor-pointer'>
					<img
						src='/bell-notify.svg'
						alt=''
					/>
				</div>
				<div>
					<h1 className='font-medium text-lg'>David Phill</h1>
					<p className='text-sm'>Tutor</p>
				</div>
			</div>
		</div>
	);
};
