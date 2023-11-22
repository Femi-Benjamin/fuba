import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='h-screen w-[303px] flex justify-center sidebar'>
			<div className=''>
				<div className='h-[123px] flex justify-center'>
					<img
						src='/fubalogo.svg'
						alt=''
					/>
				</div>
				<Link to='/dashboard'>
					<div className='flex gap-2.5 py-2 px-7 rounded border border-[#280D46] mb-7 cursor-pointer items-center'>
						<div>
							<img
								src='/overview.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Overview</p>
						</div>
					</div>
				</Link>
				<Link to='/videos'>
					<div className='flex gap-2.5 py-2 px-7 rounded border border-[#280D46] mb-7 cursor-pointer items-center'>
						<div>
							<img
								src='/video.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Videos</p>
						</div>
					</div>
				</Link>
				<Link to='/settings'>
					<div className='flex gap-2.5 py-2 px-7 rounded border border-[#280D46] mb-7 cursor-pointer items-center'>
						<div>
							<img
								src='/settings-fuba.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Settings</p>
						</div>
					</div>
				</Link>
				<Link to='/drafts'>
					<div className='flex gap-2.5 py-2 px-7 rounded border border-[#280D46] mb-7 cursor-pointer items-center'>
						<div>
							<img
								src='/drafts.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Drafts</p>
						</div>
					</div>
				</Link>
				<Link to='/'>
					<div className='flex gap-2.5 py-2 px-7 rounded border border-[#280D46] mb-7 cursor-pointer items-center'>
						<div>
							<img
								src='/signout.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Logut</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
