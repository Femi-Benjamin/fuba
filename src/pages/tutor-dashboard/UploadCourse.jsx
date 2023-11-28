import { useNavigate } from 'react-router-dom';

const UploadCourse = () => {
	return (
		<div>
			<>
        <UploadAppbar />
      </>
		</div>
	);
};

export default UploadCourse;

export const UploadAppbar = () => {

	return (
		<div className='bg-white h-[123px] dashboardappbar w-[100%] flex justify-between items-center px-5'>
			<div className=''>
				<div>
					<img src="/fubalogo.svg" alt="" />
				</div>
			</div>
			<div>
				<div>
					<p className='text-black text-xl font-semibold'>Video Upload</p>
				</div>
			</div>
			<div className='flex items-center gap-8'>
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
